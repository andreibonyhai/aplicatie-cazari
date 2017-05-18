using System.Data.Entity;
using Entities;
using Entities.Users;
using Entities.Dorm;
using Entities.Students;
using Entities.Utils;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Repositories.EntityFramework.Contexts
{
    public class MainDbContext : IdentityDbContext<User>
    {
        static MainDbContext()
        {
            Database.SetInitializer(new MainDbContextInitializer());
        }

        public MainDbContext() : base("DefaultConnection", false)
        {
        }

        public MainDbContext(string connectionString) : base(connectionString, false)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasKey(u => u.Id);

            modelBuilder.Entity<Dorm>().HasMany(d => d.Rooms).WithRequired().Map(c => c.MapKey("Dorm_Rooms"));
            modelBuilder.Entity<Dorm>().HasMany(d => d.RoomsGroundFloor).WithOptional().Map(c => c.MapKey("Dorm_RoomsGroundFloor"));
            modelBuilder.Entity<Dorm>().HasMany(d => d.RoomsFloor1).WithOptional().Map(c => c.MapKey("Dorm_RoomsFloor1"));
            modelBuilder.Entity<Dorm>().HasMany(d => d.RoomsFloor2).WithOptional().Map(c => c.MapKey("Dorm_RoomsFloor2"));
            modelBuilder.Entity<Dorm>().HasMany(d => d.RoomsFloor3).WithOptional().Map(c => c.MapKey("Dorm_RoomsFloor3"));
            modelBuilder.Entity<Dorm>().HasMany(d => d.RoomsFloor4).WithOptional().Map(c => c.MapKey("Dorm_RoomsFloor4"));
            modelBuilder.Entity<Dorm>().HasMany(d => d.RoomsFloor5).WithOptional().Map(c => c.MapKey("Dorm_RoomsFloor5"));

            base.OnModelCreating(modelBuilder);
        }

        public static MainDbContext Create()
        {
            return new MainDbContext();
        }


        public virtual DbSet<Log> Logs { get; set; }
        //TODO add entities in context
        public virtual DbSet<Dorm> Dorms { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<SpecialCase> SpecialCases { get; set; }
        public virtual DbSet<Discount> Discounts { get; set; }

    }
}