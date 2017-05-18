using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Angula2BaseStructure.Infrastructure.Controllers;
using Entities.Students;
using IServices.Logging;
using IServices.Mapping;
using IServices.Repositories;

namespace Angula2BaseStructure.Controllers.Api.StudentRegister
{
    [RoutePrefix("api/StudentRegister")]
    public class StudentRegisterController : WebApiController
    {
        public StudentRegisterController(IRepositoryService repositoryService, IMappingService mappingService, ILoggingService loggingService) : base(repositoryService, mappingService, loggingService)
        {
        }

        [HttpPost]
        [AllowAnonymous]
        public void AddStudent(Entities.Students.Student student)
        {
            Repository.Add<Entities.Students.Student>(student);
        }
    }
}