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

        [HttpPut]
        public void UpdateStudent(Student student)
        {
            var studentToUpdate = Repository.Find<Student>(student.StudentId);
            studentToUpdate.FirstName = student.FirstName;
            studentToUpdate.LastName = student.LastName;
            studentToUpdate.CNP = student.CNP;
            studentToUpdate.Email = student.Email;
            studentToUpdate.Phone = student.Phone;
            studentToUpdate.Faculty = student.Faculty;
            studentToUpdate.Year = student.Year;
            studentToUpdate.Address.Tara = student.Address.Tara;
            studentToUpdate.Address.Judet = student.Address.Judet;
            studentToUpdate.Address.Localitate = student.Address.Localitate;
            studentToUpdate.Address.Street = student.Address.Street;
            studentToUpdate.Address.Number = student.Address.Number;
            studentToUpdate.Address.Bloc = student.Address.Bloc;
            studentToUpdate.Address.Scara = student.Address.Scara;
            studentToUpdate.Address.Apartament = student.Address.Apartament;
            Repository.Update(studentToUpdate);
        }
    }
}