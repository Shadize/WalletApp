package ipeps.pwd.wallet.module.company.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.company.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.module.company.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("company")
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @PostMapping("create")
    public ApiResponse create(@RequestBody() CompanyCreatePayload payload) {
        try {
            return new ApiResponse(true, this.companyService.create(payload), ApiCode.COMPANY_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.COMPANY_CREATE_ERROR);
        }
    }

    @GetMapping("list")
    public ApiResponse list() {
        try {
            return new ApiResponse(true, this.companyService.list(), ApiCode.COMPANY_LIST_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.COMPANY_LIST_ERROR);
        }
    }

}
