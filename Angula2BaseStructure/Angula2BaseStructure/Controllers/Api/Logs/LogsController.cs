using System.Collections.Generic;
using System.Web.Http;
using Angula2BaseStructure.Infrastructure.Controllers;
using Angula2BaseStructure.Models.Dtos;
using Entities;
using IServices.Logging;
using IServices.Mapping;
using IServices.Repositories;

namespace Angula2BaseStructure.Controllers.Api.Logs
{
    [RoutePrefix("api/Logs")]
    public class LogsController : WebApiController
    {
        public LogsController(IRepositoryService repositoryService, IMappingService mappingService, ILoggingService loggingService) : base(repositoryService, mappingService, loggingService)
        {
        }

        public IEnumerable<LogDto> GetLogs()
        {
            Logger.Debug("All the logs have been requested!");
            return Mapper.Map<Log, LogDto>(Repository.GetAll<Log>());
        }
    }
}