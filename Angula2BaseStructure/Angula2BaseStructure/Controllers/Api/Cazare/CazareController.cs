using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Angula2BaseStructure.Infrastructure.Controllers;
using Entities.Utils;
using IServices.Logging;
using IServices.Mapping;
using IServices.Repositories;

namespace Angula2BaseStructure.Controllers.Api.Cazare
{
    [RoutePrefix("api/Cazare")]
    public class CazareController : WebApiController
    {
        public CazareController(IRepositoryService repositoryService, IMappingService mappingService, ILoggingService loggingService) : base(repositoryService, mappingService, loggingService)
        {
        }

        [HttpGet]
        [Route("GetSpecialCases")]
        public List<SpecialCase> GetAllSpecialCases()
        {
            return Repository.GetAll<SpecialCase>().ToList();
        }

    }
}