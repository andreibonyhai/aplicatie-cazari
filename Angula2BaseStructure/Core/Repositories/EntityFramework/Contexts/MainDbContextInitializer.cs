using System.Data.Entity;

namespace Repositories.EntityFramework.Contexts
{
    public class MainDbContextInitializer : CreateDatabaseIfNotExists<MainDbContext>
    {
    }
}