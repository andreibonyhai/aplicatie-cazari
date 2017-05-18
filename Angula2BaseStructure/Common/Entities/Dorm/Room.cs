using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Students;


namespace Entities.Dorm
{
    public class Room
    {
        public int RoomId { get; set; }
        public int Name { get; set; }
        public int TotalPlaces { get; set; }
        public int AvaliablePlaces { get; set; }
        public virtual List<Student> StudentsInRoom { get; set; }
    }
}
