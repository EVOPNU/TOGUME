using Microsoft.EntityFrameworkCore;

namespace Groups.Models
{
    public class GroupsContext : DbContext
    {
        public GroupsContext() { }
        public DbSet<Groupss> custom_groups { get; set; }
        public DbSet<InGroups> in_groups { get; set; }

        public DbSet<Invitations> invitations { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(
              //  "server=localhost;user=root;password=root;database=togumetest;",
                  "server=localhost;user=root;password=1234йцук;database=poect;",
                new MySqlServerVersion(new Version(8, 0, 27))
            );
        }
    }
}
