using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using Entities.Dorm;
using Entities.Students;
using Entities.Utils;
using Repositories.EntityFramework.Contexts;

namespace Repositories.EntityFramework.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<MainDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MainDbContext context)
        {
            var discounts = new[]
            {
                new Discount{Value = 100},
                new Discount{Value = 50},
                new Discount{Value = 25},
            };
            context.Discounts.AddOrUpdate(d => d.Value);
            var specialCases = new[]
            {
                new SpecialCase {Name = "Orfan 1 parinte", Discount = discounts[1]},
                new SpecialCase {Name = "Orfan 2 parinti", Discount = discounts[0]},
                new SpecialCase {Name = "Cadru didactic", Discount =  discounts[0]},
                new SpecialCase {Name = "Rep. Moldova", Discount =  discounts[0]},
                new SpecialCase {Name = "Comitet", Discount =  discounts[2]},
                new SpecialCase {Name = "Presedinte", Discount =  discounts[0]},
            };
            context.SpecialCases.AddOrUpdate(sc => sc.Name, specialCases);
            var camin7 = new Dorm
            {
                Name = "camin 7",
                DormId = 7,
                RestrictedRoomNames = new List<int> {15, 16, 101, 102, 109},
                RoomsGroundFloor = SeedFloor("", new List<int> {15, 16, 101, 102, 109}, new List<int> {30}),
                RoomsFloor1 = SeedFloor("1", new List<int> {15, 16, 101, 102, 109}, new List<int> {115, 116, 130}),
                RoomsFloor2 = SeedFloor("2", new List<int> {15, 16, 101, 102, 109}, new List<int> {215, 216, 230}),
                RoomsFloor3 = SeedFloor("3", new List<int> {15, 16, 101, 102, 109}, new List<int> {315, 316, 330}),
                RoomsFloor4 = SeedFloor("4", new List<int> {15, 16, 101, 102, 109}, new List<int> {415, 416, 430}),
                RoomsFloor5 = SeedFloor("5", new List<int> {15, 16, 101, 102, 109}, new List<int> {515, 516, 530}),
                Rooms = new List<Room>()
            };
            camin7.Rooms = camin7.Rooms.Union(camin7.RoomsGroundFloor).Union(camin7.RoomsFloor1).Union(camin7.RoomsFloor2)
                .Union(camin7.RoomsFloor3).Union(camin7.RoomsFloor4).Union(camin7.RoomsFloor5).ToList();

            context.Dorms.AddOrUpdate(dr => dr.Name, camin7);

            context.SaveChanges();
        }

        private List<Room> SeedFloor(string prefix, List<int> restrictedRooms, List<int>TwoPersonRooms  )
        {
            var rooms = new List<Room>();
            for (var i = 1; i < 33; i++)
            {
                //make sure to skip not existing rooms
                if (i != 11 && i != 12 && i != 13 && i != 14)
                {

                    var room = new Room();

                    var computedRoomName = 0;
                    //compute room name and check if room exists?
                    if (i < 10) computedRoomName = Int32.Parse(prefix + "0" + i);
                    else computedRoomName = Int32.Parse(prefix + i);
                    if (restrictedRooms.Contains(i))
                    {
                        room.TotalPlaces = 0;
                        room.AvaliablePlaces = 0;
                        room.StudentsInRoom = null;
                        room.Name = computedRoomName;
                        room.RoomId = computedRoomName;
                        rooms.Add(room);
                        continue;
                    }
                    //check if room is 2 person only
                    if (TwoPersonRooms.Contains(computedRoomName))
                    {
                        room.RoomId = computedRoomName;
                        room.Name = computedRoomName;
                        room.TotalPlaces = 2;
                        room.AvaliablePlaces = 2;
                        room.StudentsInRoom = new List<Student>();
                        rooms.Add(room);
                        continue;
                    }
                    room.RoomId = computedRoomName;
                    room.Name = computedRoomName;
                    room.TotalPlaces = 4;
                    room.AvaliablePlaces = 4;
                    room.StudentsInRoom = new List<Student>();
                    rooms.Add(room);

                    
                }
            }
            return rooms;
        }
    }
}
