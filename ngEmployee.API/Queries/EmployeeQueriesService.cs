using System.Collections.Generic;
using System.Threading.Tasks;
using Arch.EntityFrameworkCore.UnitOfWork;
using Arch.EntityFrameworkCore.UnitOfWork.Collections;
using Microsoft.EntityFrameworkCore;
using ngEmployee.API.Models;

public class EmployeeQueriesService : IEmployeeQueriesService
{
    // private readonly EmployeeContext _empContext;
    private readonly IRepository<Employee> _empRepo;

    public EmployeeQueriesService(IRepository<Employee> empRepo)//EmployeeContext empContext
    {
        // this._empContext = empContext;
        _empRepo = empRepo;
    }

    public async Task<IPagedList<Employee>> GetAllEmployee()
    {
        // return await this._empContext.Employees.ToListAsync();
        return await _empRepo.GetPagedListAsync();
    }
}