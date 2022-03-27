using Microsoft.EntityFrameworkCore;


namespace SecurityT
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext() { }
        public DbSet<Account> accounts{ get; set; }
        public DbSet<Code> codes { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(
              //"server=localhost;user=root;password=root;database=taa;",
              "server=db;user=root;password=root;database=togumetest;",
                // "server=localhost;user=root;password=root;database=togumetest;",
                new MySqlServerVersion(new Version(8, 0, 23))
            );
        }
    }
}
