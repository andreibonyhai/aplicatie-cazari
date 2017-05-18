using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Angula2BaseStructure.Infrastructure.Controllers;
using IServices.Logging;
using IServices.Mapping;
using IServices.Repositories;

namespace Angula2BaseStructure.Controllers.Api.CazareStudent
{
    [RoutePrefix("api/CazareStudent")]
    public class CazareStudentController:WebApiController
    {
        public CazareStudentController(IRepositoryService repositoryService, IMappingService mappingService, ILoggingService loggingService) : base(repositoryService, mappingService, loggingService)
        {
        }
        [HttpGet]
        public List<Entities.Students.Student> GetAllStudents()
        {
            return Repository.GetAll<Entities.Students.Student>().ToList();
        }
    }
}