package ipeps.pwd.wallet.module.salary.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.salary.entity.Salary;
import ipeps.pwd.wallet.module.salary.entity.payload.SalaryCreatePayload;
import ipeps.pwd.wallet.module.salary.entity.payload.SalaryUpdatePayload;
import ipeps.pwd.wallet.module.salary.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("salary")
public class SalaryController {
    @Autowired
    SalaryService salaryService;

    @GetMapping("list")
    public ApiResponse list() {
        try {
            return new ApiResponse(true, this.salaryService.list(), ApiCode.SALARY_LIST_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SALARY_LIST_ERROR);
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID salary_id) {
        try {
            Salary detail = this.salaryService.detail(salary_id);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.SALARY_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, detail, ApiCode.SALARY_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SALARY_DETAIL_ERROR);
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody() SalaryCreatePayload payload) {
        try {
            return new ApiResponse(true, this.salaryService.create(payload), ApiCode.SALARY_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SALARY_CREATE_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() SalaryUpdatePayload payload) {
        try {
            Salary salaryUpdated = this.salaryService.update(payload);
            if(salaryUpdated != null){
                return new ApiResponse(true, salaryUpdated, ApiCode.SALARY_UPDATE_SUCCESS);
            }
            return new ApiResponse(true, this.salaryService.update(payload), ApiCode.SALARY_UPDATE_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SALARY_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID salary_id) {
        if (this.salaryService.delete(salary_id)) {
            return new ApiResponse(true, "", ApiCode.SALARY_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.SALARY_DELETE_ERROR);

    }
}
