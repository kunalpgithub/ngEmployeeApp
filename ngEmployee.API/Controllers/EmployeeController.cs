using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Arch.EntityFrameworkCore.UnitOfWork.Collections;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ngEmployee.API.Models;

namespace ngEmployee.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IEmployeeCommandSerice _empCmdService;
        private readonly IEmployeeQueriesService _empQueryService;

        public EmployeeController(IEmployeeCommandSerice empCmdService,IEmployeeQueriesService empQueryService, ILogger<WeatherForecastController> logger)
        {
            _empCmdService = empCmdService;
            _empQueryService = empQueryService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IPagedList<Employee>> Get()
        {
            Console.WriteLine(this.User.Identity.IsAuthenticated);
            Console.WriteLine(this.User.Identity.Name);
            return await _empQueryService.GetAllEmployee();
        }
    }
}
