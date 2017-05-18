using System.Web.Mvc;

namespace Angula2BaseStructure.Infrastructure.Extensions
{
    public static class UrlHelperExtensions
    {
        public static string ApiUrl(this UrlHelper urlHelper, string controllerName)
        {
            return "api" + urlHelper.Action("", controllerName);
        }
    }
}