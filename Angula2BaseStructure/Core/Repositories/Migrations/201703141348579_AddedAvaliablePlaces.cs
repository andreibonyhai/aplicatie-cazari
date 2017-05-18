namespace Repositories.EntityFramework.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedAvaliablePlaces : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Rooms", "AvaliablePlaces", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Rooms", "AvaliablePlaces");
        }
    }
}
