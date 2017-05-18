using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using Angula2BaseStructure.Infrastructure.Controllers;
using Angula2BaseStructure.Models.ViewModels.Auth;
using Entities.Users;
using IServices.Logging;
using IServices.Mapping;
using IServices.Repositories;
using Microsoft.AspNet.Identity.Owin;
using System.Threading.Tasks;
using Angula2BaseStructure.Infrastructure.Extensions;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Angula2BaseStructure.Controllers.Api.Auth
{
    [RoutePrefix("api/Auth")]
    public class AuthController : WebApiController
    {

        public AuthController(IRepositoryService repositoryService, IMappingService mappingService, ILoggingService loggingService) : base(repositoryService, mappingService, loggingService)
        {
        }

        private ApplicationUserManager userManager;
        private ApplicationUserManager UserManager
        {
            get { return userManager = userManager ?? HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>(); }
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("Register")]
        public async Task Register([FromBody] RegisterCredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                throw new ValidationException(ModelState.ToString());
            }

            var newUser = new User
            {
                UserName = credentials.Username,
                Email = credentials.Email,
                FirstName = credentials.FirstName,
                LastName = credentials.LastName
            };

            var result = await UserManager.CreateAsync(newUser, credentials.Password);
            if (!result.Succeeded)
            {
                throw new ValidationException(JsonConvert.SerializeObject(result.Errors));
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("Login")]
        public async Task<JObject> Login([FromBody] LoginCredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                throw new ValidationException(ModelState.ToString());
            }

            var user = await UserManager.FindAsync(credentials.Username, credentials.Password);
            if (user == null)
                throw new UnauthorizedAccessException("The provided username and password are invalid.");

            var tokenReponse = GenerateLocalAccessTokenResponse(user.UserName);
            return tokenReponse;
        }

        [HttpPost]
        [Route("Logout")]
        public async Task Logout()
        {
            //TODO
            await Task.Delay(100);
        }


        [HttpGet]
        [Route("UserDetails")]
        public async Task<UserViewModel> GetUserDetails()
        {
            var decodedToken = Startup.OAuthOptions.AccessTokenFormat.Unprotect(Request.GetToken());
            var user = await UserManager.FindByNameAsync(decodedToken.Identity.Name);
            return new UserViewModel
            {
                Username = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName
            };
        }

        private JObject GenerateLocalAccessTokenResponse(string username)
        {
            var tokenExpiration = TimeSpan.FromDays(1);
            var identity = new ClaimsIdentity(OAuthDefaults.AuthenticationType);
            identity.AddClaim(new Claim(ClaimTypes.Name, username));
            identity.AddClaim(new Claim(ClaimTypes.Role, "user"));

            var props = new AuthenticationProperties
            {
                IssuedUtc = DateTime.UtcNow,
                ExpiresUtc = DateTime.UtcNow.Add(tokenExpiration)
            };

            var ticket = new AuthenticationTicket(identity, props);

            var accessToken = Startup.OAuthOptions.AccessTokenFormat.Protect(ticket);

            var tokenResponse = new JObject(
                new JProperty("access_token", accessToken),
                new JProperty("token_type", "bearer"),
                new JProperty("expires_in", tokenExpiration.TotalSeconds.ToString(CultureInfo.InvariantCulture)),
                new JProperty(".issued", ticket.Properties.IssuedUtc.ToString()),
                new JProperty(".expires", ticket.Properties.ExpiresUtc.ToString())
                );
            return tokenResponse;
        }

    }
}