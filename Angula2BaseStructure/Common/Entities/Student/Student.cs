using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Dorm;
using Entities.Utils;

namespace Entities.Students
{
    public class Student
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CNP { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Faculty { get; set; }
        public string Year { get; set; }
        //contact
        public virtual Address Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public virtual Room Room { get; set; }
        public virtual SpecialCase SpecialCase { get; set; }
    }
}
