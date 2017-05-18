using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angula2BaseStructure.Startup))]
namespace Angula2BaseStructure
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
