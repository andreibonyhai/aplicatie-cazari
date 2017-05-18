using IServices.Mapping;
using Services.Mapping.Configurators;

namespace Angula2BaseStructure
{
    public class MappingConfig
    {
        /// <summary>
        /// Configures this instance.
        /// </summary>
        public static void Configure(IBinder binder)
        {
            var mappingsConfigurator = new AssemblyMapperConfigurator(typeof(MappingConfig).Assembly, binder);
            mappingsConfigurator.LoadConfiguration();
        }
    }
}