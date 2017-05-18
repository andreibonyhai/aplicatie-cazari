namespace Repositories.EntityFramework.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModifiedContext : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Discounts", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Discounts", "Name", c => c.String());
        }
    }
}
