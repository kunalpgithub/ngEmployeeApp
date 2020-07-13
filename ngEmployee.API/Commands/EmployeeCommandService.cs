using System.Threading.Tasks;
using Arch.EntityFrameworkCore.UnitOfWork;
using ngEmployee.API.Models;

public class EmployeeCommandService : IEmployeeCommandSerice
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly EmployeeContext _empContext;
    public EmployeeCommandService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    public async Task  AddEmployee(Employee employee)
    {
        var repo = _unitOfWork.GetRepository<Employee>();
        repo.Insert(employee);
        await _unitOfWork.SaveChangesAsync();
        // await _empContext.AddAsync(employee);
        // await _empContext.SaveChangesAsync();    
    }

}