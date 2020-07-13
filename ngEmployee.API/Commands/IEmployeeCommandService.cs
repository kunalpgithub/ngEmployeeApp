using System.Threading.Tasks;
using ngEmployee.API.Models;

public interface IEmployeeCommandSerice
{
    Task AddEmployee(Employee employee);
}