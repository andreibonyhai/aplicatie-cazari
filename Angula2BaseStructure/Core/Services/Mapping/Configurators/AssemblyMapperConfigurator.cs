using System;
using System.Linq;
using System.Reflection;
using IServices.Mapping;

namespace Services.Mapping.Configurators
{
    public class AssemblyMapperConfigurator : IMapperConfigurator
    {
        public AssemblyMapperConfigurator(Assembly assembly, IBinder binder)
        {
            this.assembly = assembly;
            this.binder = binder;
        }

        private readonly Assembly assembly;
        private readonly IBinder binder;

        public void LoadConfiguration()
        {
            var mappings = assembly.GetTypes().Where(t => t.GetInterfaces().Contains(typeof(IMappingConfig)));
            foreach (var mappingInstance in mappings.Select(mapping => (IMappingConfig)Activator.CreateInstance(mapping)))
            {
                mappingInstance.Register(binder);
            }
            binder.Verify();
        }
    }
}