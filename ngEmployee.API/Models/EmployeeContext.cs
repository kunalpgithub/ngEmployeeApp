using System;
using Microsoft.EntityFrameworkCore;

namespace ngEmployee.API.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<Employee>().HasData(
                new Employee{
                    EmployeeId =1,
                    FirstName = "Krunal",
                    LastName = "Parmar",
                    Email="kunal.ahmedabad@gmail.com",
                    DateOfBirth= new DateTime(1985,02,04),
                    PhoneNumber= "+91-9833265024"
                },
                new Employee{
                    EmployeeId =2,
                    FirstName = "Kinnari",
                    LastName = "Solanki",
                    Email="kinnari.solanki88@gmail.com",
                    DateOfBirth= new DateTime(1988,06,15),
                    PhoneNumber= "+91-9004558812"
                }
            );
        }
    }
}