namespace Repositories.EntityFramework.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Dorms",
                c => new
                    {
                        DormId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.DormId);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        RoomId = c.Int(nullable: false, identity: true),
                        Name = c.Int(nullable: false),
                        TotalPlaces = c.Int(nullable: false),
                        Dorm_Rooms = c.Int(nullable: false),
                        Dorm_RoomsFloor1 = c.Int(),
                        Dorm_RoomsFloor2 = c.Int(),
                        Dorm_RoomsFloor3 = c.Int(),
                        Dorm_RoomsFloor4 = c.Int(),
                        Dorm_RoomsFloor5 = c.Int(),
                        Dorm_RoomsGroundFloor = c.Int(),
                    })
                .PrimaryKey(t => t.RoomId)
                .ForeignKey("dbo.Dorms", t => t.Dorm_Rooms, cascadeDelete: true)
                .ForeignKey("dbo.Dorms", t => t.Dorm_RoomsFloor1)
                .ForeignKey("dbo.Dorms", t => t.Dorm_RoomsFloor2)
                .ForeignKey("dbo.Dorms", t => t.Dorm_RoomsFloor3)
                .ForeignKey("dbo.Dorms", t => t.Dorm_RoomsFloor4)
                .ForeignKey("dbo.Dorms", t => t.Dorm_RoomsFloor5)
                .ForeignKey("dbo.Dorms", t => t.Dorm_RoomsGroundFloor)
                .Index(t => t.Dorm_Rooms)
                .Index(t => t.Dorm_RoomsFloor1)
                .Index(t => t.Dorm_RoomsFloor2)
                .Index(t => t.Dorm_RoomsFloor3)
                .Index(t => t.Dorm_RoomsFloor4)
                .Index(t => t.Dorm_RoomsFloor5)
                .Index(t => t.Dorm_RoomsGroundFloor);
            
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        StudentId = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        CNP = c.String(),
                        DateOfBirth = c.DateTime(nullable: false),
                        Faculty = c.String(),
                        Phone = c.String(),
                        Email = c.String(),
                        Address_AddressId = c.Int(),
                        Room_RoomId = c.Int(),
                        SpecialCase_SpecialCaseId = c.Int(),
                    })
                .PrimaryKey(t => t.StudentId)
                .ForeignKey("dbo.Addresses", t => t.Address_AddressId)
                .ForeignKey("dbo.Rooms", t => t.Room_RoomId)
                .ForeignKey("dbo.SpecialCases", t => t.SpecialCase_SpecialCaseId)
                .Index(t => t.Address_AddressId)
                .Index(t => t.Room_RoomId)
                .Index(t => t.SpecialCase_SpecialCaseId);
            
            CreateTable(
                "dbo.Addresses",
                c => new
                    {
                        AddressId = c.Int(nullable: false, identity: true),
                        Tara = c.String(),
                        Judet = c.String(),
                        Localitate = c.String(),
                        Street = c.String(),
                        Number = c.String(),
                        Bloc = c.String(),
                        Scara = c.String(),
                        Apartament = c.String(),
                    })
                .PrimaryKey(t => t.AddressId);
            
            CreateTable(
                "dbo.SpecialCases",
                c => new
                    {
                        SpecialCaseId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Discount_DiscountId = c.Int(),
                    })
                .PrimaryKey(t => t.SpecialCaseId)
                .ForeignKey("dbo.Discounts", t => t.Discount_DiscountId)
                .Index(t => t.Discount_DiscountId);
            
            CreateTable(
                "dbo.Discounts",
                c => new
                    {
                        DiscountId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Value = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.DiscountId);
            
            CreateTable(
                "dbo.Logs",
                c => new
                    {
                        LogId = c.Int(nullable: false, identity: true),
                        TimeStamp = c.DateTime(nullable: false),
                        Level = c.String(),
                        Thread = c.String(),
                        Message = c.String(),
                        Exception = c.String(),
                        Identity = c.String(),
                        Location = c.String(),
                    })
                .PrimaryKey(t => t.LogId);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.Rooms", "Dorm_RoomsGroundFloor", "dbo.Dorms");
            DropForeignKey("dbo.Rooms", "Dorm_RoomsFloor5", "dbo.Dorms");
            DropForeignKey("dbo.Rooms", "Dorm_RoomsFloor4", "dbo.Dorms");
            DropForeignKey("dbo.Rooms", "Dorm_RoomsFloor3", "dbo.Dorms");
            DropForeignKey("dbo.Rooms", "Dorm_RoomsFloor2", "dbo.Dorms");
            DropForeignKey("dbo.Rooms", "Dorm_RoomsFloor1", "dbo.Dorms");
            DropForeignKey("dbo.Rooms", "Dorm_Rooms", "dbo.Dorms");
            DropForeignKey("dbo.Students", "SpecialCase_SpecialCaseId", "dbo.SpecialCases");
            DropForeignKey("dbo.SpecialCases", "Discount_DiscountId", "dbo.Discounts");
            DropForeignKey("dbo.Students", "Room_RoomId", "dbo.Rooms");
            DropForeignKey("dbo.Students", "Address_AddressId", "dbo.Addresses");
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.SpecialCases", new[] { "Discount_DiscountId" });
            DropIndex("dbo.Students", new[] { "SpecialCase_SpecialCaseId" });
            DropIndex("dbo.Students", new[] { "Room_RoomId" });
            DropIndex("dbo.Students", new[] { "Address_AddressId" });
            DropIndex("dbo.Rooms", new[] { "Dorm_RoomsGroundFloor" });
            DropIndex("dbo.Rooms", new[] { "Dorm_RoomsFloor5" });
            DropIndex("dbo.Rooms", new[] { "Dorm_RoomsFloor4" });
            DropIndex("dbo.Rooms", new[] { "Dorm_RoomsFloor3" });
            DropIndex("dbo.Rooms", new[] { "Dorm_RoomsFloor2" });
            DropIndex("dbo.Rooms", new[] { "Dorm_RoomsFloor1" });
            DropIndex("dbo.Rooms", new[] { "Dorm_Rooms" });
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.Logs");
            DropTable("dbo.Discounts");
            DropTable("dbo.SpecialCases");
            DropTable("dbo.Addresses");
            DropTable("dbo.Students");
            DropTable("dbo.Rooms");
            DropTable("dbo.Dorms");
        }
    }
}
