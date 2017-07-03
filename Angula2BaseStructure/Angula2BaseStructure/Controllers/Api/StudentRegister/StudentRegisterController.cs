using System;
using System.Collections.Generic;
using System.IO;
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
            studentToUpdate.Serie = student.Serie;
            studentToUpdate.NrBuletin = student.NrBuletin;
            studentToUpdate.Email = student.Email;
            studentToUpdate.Phone = student.Phone;
            studentToUpdate.Faculty = student.Faculty;
            studentToUpdate.Specialisation = student.Specialisation;
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
        [HttpPost]
        [AllowAnonymous]
        [Route("SaveToDisk")]
        public void UploadFiles()
        {
            int iUploadedCnt = 0;
            // DEFINE THE PATH WHERE WE WANT TO SAVE THE FILES.
            string sPath = "";
            sPath = System.Web.Hosting.HostingEnvironment.MapPath("~/locker/");
            System.Web.HttpFileCollection hfc = System.Web.HttpContext.Current.Request.Files;
            // CHECK THE FILE COUNT.
            for (int iCnt = 0; iCnt <= hfc.Count - 1; iCnt++)
            {
                System.Web.HttpPostedFile hpf = hfc[iCnt];
                if (hpf.ContentLength > 0)
                {
                    // CHECK IF THE SELECTED FILE(S) ALREADY EXISTS IN FOLDER. (AVOID DUPLICATE)
                    if (!File.Exists(sPath + Path.GetFileName(hpf.FileName)))
                    {
                        // SAVE THE FILES IN THE FOLDER.
                        hpf.SaveAs(sPath + Path.GetFileName(hpf.FileName));
                        iUploadedCnt = iUploadedCnt + 1;
                    }
                }
            }
        }
    }
}