using System.Web.Http;
using IServices.Logging;
using IServices.Mapping;
using IServices.Repositories;
using Repositories.EntityFramework.Contexts;
using Repositories.EntityFramework.Services;
using Services.Logging;
using Services.Mapping;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;


namespace Angula2BaseStructure
{
    public static class ContainerConfig
    {
        private static Container container;

        /// <summary>
        /// Configures this instance.
        /// </summary>
        public static void Configure()
        {
            //// Create the container as usual.
            container = new Container();
            container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();
            //Register the type mappings
            RegisterTypes();
            // This is an extension method from the integration package.
            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
            container.Verify();
            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(container);
        }

        /// <summary>
        /// Gets the logging service.
        /// </summary>
        /// <returns></returns>
        public static ILoggingService GetLoggingService()
        {
            return container.GetInstance<ILoggingService>();
        }

        /// <summary>
        /// Gets the mapper.
        /// </summary>
        /// <returns></returns>
        public static IBinder GetBinder()
        {
            return container.GetInstance<IMappingService>();
        }

        /// <summary>
        /// Registers the types.
        /// </summary>
        private static void RegisterTypes()
        {
            container.Register<ILoggingService, Log4NetLoggingService>(Lifestyle.Singleton);
            container.Register(() => new MainDbContext(), Lifestyle.Scoped);
            container.Register<IRepositoryService, DatabaseRepositoryService<MainDbContext>>(Lifestyle.Scoped);
            container.Register<IMappingService, ExpressMappingService>(Lifestyle.Singleton);
            container.Register<IMapper>(() => container.GetInstance<IMappingService>());
        }
    }
}