using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dorm
{
    public class Dorm
    {
        public int DormId { get; set; }
        public string Name { get; set; }
        public virtual List<Room> Rooms { get; set; }
        public virtual List<Room> RoomsGroundFloor { get; set; }
        public virtual List<Room> RoomsFloor1 { get; set; }
        public virtual List<Room> RoomsFloor2 { get; set; }
        public virtual List<Room> RoomsFloor3 { get; set; }
        public virtual List<Room> RoomsFloor4 { get; set; }
        public virtual List<Room> RoomsFloor5 { get; set; }
        public List<int> RestrictedRoomNames { get; set; }
    }
}
