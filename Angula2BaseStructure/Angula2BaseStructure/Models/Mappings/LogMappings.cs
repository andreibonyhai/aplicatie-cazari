using System.Globalization;
using Angula2BaseStructure.Models.Dtos;
using Entities;
using IServices.Mapping;

namespace Angula2BaseStructure.Models.Mappings
{
    public class LogMappings : IMappingConfig
    {
        public void Register(IBinder binder)
        {
            binder.Bind<Log, LogDto>(config =>
            {
                config.Function(src => $"{src.TimeStamp.ToString(CultureInfo.InvariantCulture)}: {src.Message}", dest => dest.DetailedLog);
            });
        }
    }
}