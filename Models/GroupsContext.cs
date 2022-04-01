using Microsoft.EntityFrameworkCore;

namespace Groups.Models
{
    public class GroupsContext : DbContext
    {
        public GroupsContext() { }
        public DbSet<Groupss> publics { get; set; }
        public DbSet<InGroups> in_publics { get; set; }

        public DbSet<Invitations> invitations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InGroups>().HasKey(u => new { u.public_id, u.user_id });
            modelBuilder.Entity<Invitations>().HasKey(u => new { u.public_id, u.user_id });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(
                "server=db;user=root;password=root;database=togumetest;",
               //   "server=localhost;user=root;password=1234йцук;database=poect;",
                new MySqlServerVersion(new Version(8, 0, 23))
            );
        }
    }
}
