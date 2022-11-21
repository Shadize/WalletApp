package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiCode;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.payload.OrganizationCreatePayload;
import ipeps.pwd.wallet.entity.payload.OrganizationUpdatePayload;
import ipeps.pwd.wallet.service.OrganizationService;
import ipeps.pwd.wallet.service.impl.OrganizationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("organization")
public class OrganizationController {
    @Autowired
    OrganizationService organizationService;

    @GetMapping("list")
    public ApiResponse list() {
        try {
            return new ApiResponse(true, this.organizationService.list(), ApiCode.ORGANIZATION_LIST_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.ORGANIZATION_LIST_ERROR);
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID person_id) {
        try {
            Organization detail = this.organizationService.detail(person_id);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.ORGANIZATION_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, detail, ApiCode.ORGANIZATION_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.ORGANIZATION_DETAIL_ERROR);
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody() OrganizationCreatePayload payload) {
        try {
            return new ApiResponse(true, this.organizationService.create(payload), ApiCode.ORGANIZATION_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.ORGANIZATION_CREATE_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() OrganizationUpdatePayload payload) {
        try {
            Organization personUpdated = this.organizationService.update(payload);
            if(personUpdated != null){
                return new ApiResponse(true, personUpdated, ApiCode.ORGANIZATION_UPDATE_SUCCESS);
            }
            return new ApiResponse(true, this.organizationService.update(payload), ApiCode.ORGANIZATION_UPDATE_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.ORGANIZATION_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID person_id) {
        if (this.organizationService.delete(person_id)) {
            return new ApiResponse(true, "", ApiCode.ORGANIZATION_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.ORGANIZATION_DELETE_ERROR);

    }

}
