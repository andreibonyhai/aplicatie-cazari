namespace Repositories.EntityFramework.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedSectie : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "Specialisation", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Students", "Specialisation");
        }
    }
}
