package ipeps.pwd.wallet.module.company.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.company.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.module.company.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.module.company.service.CompanyService;
import ipeps.pwd.wallet.module.organization.entity.Organization;
import ipeps.pwd.wallet.module.organization.entity.payload.OrganizationUpdatePayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

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

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID company_id) {
        try {
            Company detail = this.companyService.detail(company_id);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.COMPANY_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, detail, ApiCode.COMPANY_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.COMPANY_DETAIL_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() CompanyUpdatePayload payload) {
        try {
            Company companyUpdated = this.companyService.update(payload);
            if(companyUpdated != null){
                return new ApiResponse(true, companyUpdated, ApiCode.COMPANY_UPDATE_SUCCESS);
            }
            return new ApiResponse(true, null, ApiCode.COMPANY_UPDATE_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.COMPANY_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID company_id) {
        if (this.companyService.delete(company_id)) {
            return new ApiResponse(true, "", ApiCode.COMPANY_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.COMPANY_DELETE_ERROR);

    }

}
