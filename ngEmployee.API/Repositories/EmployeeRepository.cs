using Arch.EntityFrameworkCore.UnitOfWork;
using ngEmployee.API.Models;

public class EmployeeRepository : Repository<Employee>, IRepository<Employee>
{
    public EmployeeRepository(EmployeeContext dbContext) : base(dbContext)
    {

    }
}