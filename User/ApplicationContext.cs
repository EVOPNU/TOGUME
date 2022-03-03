﻿using Microsoft.EntityFrameworkCore;


namespace User
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext() { }
        public DbSet<Account> account{ get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(
                //"server=localhost;user=root;password=root;database=taa;",
               "server=localhost;user=root;password=EnderWarAdmin;database=togume;",
                new MySqlServerVersion(new Version(8, 0, 27))
            );
        }
    }
}