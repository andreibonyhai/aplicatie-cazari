using System.Web;
using System.Web.Http;
using Angula2BaseStructure.Infrastructure.Authorization;
using Angula2BaseStructure.Infrastructure.Extensions;
using Entities.Users;
using IServices.Logging;
using IServices.Mapping;
using IServices.Repositories;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace Angula2BaseStructure.Infrastructure.Controllers
{
    [AuthorizeUser]
    public abstract class WebApiController : ApiController
    {
        protected readonly IRepositoryService Repository;
        protected readonly IMappingService Mapper;
        protected readonly ILogger Logger;
        public WebApiController(IRepositoryService repositoryService, IMappingService mappingService, ILoggingService loggingService)
        {
            Repository = repositoryService;
            Mapper = mappingService;
            Logger = loggingService.GetLogger(GetType());
        }

        public User CurrentUser
        {
            get
            {
                var decodedToken = Startup.OAuthOptions.AccessTokenFormat.Unprotect(Request.GetToken());
                return UserManager.FindByName(decodedToken.Identity.Name);
            }
        }

        private ApplicationUserManager userManager;
        private ApplicationUserManager UserManager
        {
            get { return userManager = userManager ?? HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>(); }
        }
    }
}