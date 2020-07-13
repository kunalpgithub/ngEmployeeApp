using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ngEmployee.API.Migrations
{
    public partial class seeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "EmployeeId", "DateOfBirth", "Email", "FirstName", "LastName", "PhoneNumber" },
                values: new object[] { 1L, new DateTime(1985, 2, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "kunal.ahmedabad@gmail.com", "Krunal", "Parmar", "+91-9833265024" });

            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "EmployeeId", "DateOfBirth", "Email", "FirstName", "LastName", "PhoneNumber" },
                values: new object[] { 2L, new DateTime(1988, 6, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "kinnari.solanki88@gmail.com", "Kinnari", "Solanki", "+91-9004558812" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1L);

            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 2L);
        }
    }
}
