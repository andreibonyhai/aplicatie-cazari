namespace Repositories.EntityFramework.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatedStudent : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "DormName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Students", "DormName");
        }
    }
}
