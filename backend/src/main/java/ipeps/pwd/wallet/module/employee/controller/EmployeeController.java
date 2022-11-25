package ipeps.pwd.wallet.module.employee.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.employee.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.module.employee.entity.payload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.module.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("list")
    public ApiResponse list() {
        try {
            List<Employee> employees = this.employeeService.list();
            if(employees != null)
            {
                return new ApiResponse(true, employees, ApiCode.EMPLOYEE_LIST_SUCCESS);
            }
            return new ApiResponse(false, null, ApiCode.EMPLOYEE_LIST_NOT_FOUND);

        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.EMPLOYEE_LIST_ERROR);
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID employeeId) {
        try {
            Employee detail = this.employeeService.detail(employeeId);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.EMPLOYEE_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, null, ApiCode.EMPLOYEE_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.EMPLOYEE_DETAIL_ERROR);
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody() EmployeeCreatePayload payload) {
        try {
            return new ApiResponse(true, this.employeeService.create(payload), ApiCode.EMPLOYEE_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.EMPLOYEE_CREATE_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() EmployeeUpdatePayload payload) {
        try {
            Employee employeeUpdated = this.employeeService.update(payload);
            if(employeeUpdated != null){
                return new ApiResponse(true, employeeUpdated, ApiCode.EMPLOYEE_UPDATE_SUCCESS);
            }

            return new ApiResponse(false, null, ApiCode.EMPLOYEE_UPDATE_NOT_FOUND);
           // return new ApiResponse(true, this.employeeService.update(payload), ApiCode.EMPLOYEE_UPDATE_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.EMPLOYEE_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID employeeId) {
        if (this.employeeService.delete(employeeId)) {
            return new ApiResponse(true, "", ApiCode.EMPLOYEE_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.EMPLOYEE_DELETE_ERROR);

    }

}
