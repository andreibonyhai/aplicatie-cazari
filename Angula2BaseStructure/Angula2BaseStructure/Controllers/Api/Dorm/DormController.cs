using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Angula2BaseStructure.Infrastructure.Controllers;
using IServices.Logging;
using IServices.Mapping;
using IServices.Repositories;
using Entities.Dorm;
using Entities.Students;
using Entities.Utils;

namespace Angula2BaseStructure.Controllers.Api.Dorm
{
    [RoutePrefix("api/Dorm")]
    public class DormController : WebApiController
    {
        public DormController(IRepositoryService repositoryService, IMappingService mappingService, ILoggingService loggingService) : base(repositoryService, mappingService, loggingService)
        {
        }

        [HttpGet]
        public List<Entities.Dorm.Dorm> GetDorms()
        {
            //return Repository.Find<Entities.Dorm.Dorm>(dormId);
            return Repository.GetAll<Entities.Dorm.Dorm>().ToList();
        }

        [HttpGet]
        [Route("GetDorm")]
        public Entities.Dorm.Dorm GetDorm(int dormId)
        {
            return Repository.Find<Entities.Dorm.Dorm>(dormId);
        }

        [HttpPost]
        [Route("CazeazaStudent")]
        public void CazeazaStudent(CazareRequestParams reqParams)
        {
            //add student in room 
            var dorm = Repository.Find<Entities.Dorm.Dorm>(reqParams.dormId);
            var room = dorm.Rooms.Find(r => r.RoomId == reqParams.roomId);
            var student = Repository.Find<Student>(reqParams.studentId);
            room.StudentsInRoom.Add(student);
            room.AvaliablePlaces = room.AvaliablePlaces - 1;
            student.DormName = dorm.Name;
            Repository.Update(room);
            Repository.Update(student);
      


        }
        [HttpPost]
        [Route("SetSpecialCase")]
        public void SetSpecialCase(AddSpecialCaseParams caseParams)
        {
            var student = Repository.Find<Student>(caseParams.studentId);
            var specialCase = Repository.Find<SpecialCase>(caseParams.specialCaseId);
            student.SpecialCase = specialCase;
            Repository.Update(student);
        }
    }


    public class CazareRequestParams
    {
        public int dormId { get; set; }
        public int studentId { get; set; }
        public int roomId { get; set; }
    }
    public class AddSpecialCaseParams
    {
        public int studentId { get; set; }
        public int specialCaseId { get; set; }
    }
}