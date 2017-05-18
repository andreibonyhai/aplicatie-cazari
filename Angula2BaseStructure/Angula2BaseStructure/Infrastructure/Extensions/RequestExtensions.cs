using System.Net.Http;

namespace Angula2BaseStructure.Infrastructure.Extensions
{
    public static class RequestExtensions
    {
        public static string GetToken(this HttpRequestMessage request)
        {
            return request.Headers.Authorization.Parameter.Replace("Bearer ", string.Empty);
        }
    }
}