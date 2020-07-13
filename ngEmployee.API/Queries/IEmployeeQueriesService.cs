using System.Collections.Generic;
using System.Threading.Tasks;
using Arch.EntityFrameworkCore.UnitOfWork.Collections;
using ngEmployee.API.Models;

public interface IEmployeeQueriesService
{
    Task<IPagedList<Employee>>  GetAllEmployee();
}