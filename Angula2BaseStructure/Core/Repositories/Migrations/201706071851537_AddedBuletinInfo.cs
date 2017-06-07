namespace Repositories.EntityFramework.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedBuletinInfo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "Serie", c => c.String());
            AddColumn("dbo.Students", "NrBuletin", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Students", "NrBuletin");
            DropColumn("dbo.Students", "Serie");
        }
    }
}
