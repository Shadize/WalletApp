package ipeps.pwd.wallet.module.contract.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.contract.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.module.contract.entity.payload.ContractUpdatePayload;
import ipeps.pwd.wallet.module.contract.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("contract")
public class ContractController {

    @Autowired
    ContractService contractService;

    @PostMapping("create")
    public ApiResponse create(@RequestBody() ContractCreatePayload payload) {
        try {
            return new ApiResponse(true, this.contractService.create(payload), ApiCode.CONTRACT_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.CONTRACT_CREATE_ERROR);
        }
    }

    @GetMapping("list")
    public ApiResponse list() {
        try {
            return new ApiResponse(true, this.contractService.list(), ApiCode.CONTRACT_LIST_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.CONTRACT_LIST_ERROR);
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID contract_id) {
        try {
            Contract detail = this.contractService.detail(contract_id);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.CONTRACT_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, detail, ApiCode.CONTRACT_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.CONTRACT_DETAIL_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() ContractUpdatePayload payload) {
        try {
            Contract contractUpdated = this.contractService.update(payload);
            if(contractUpdated != null){
                return new ApiResponse(true, contractUpdated, ApiCode.CONTRACT_UPDATE_SUCCESS);
            }
            return new ApiResponse(true, null, ApiCode.CONTRACT_UPDATE_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.CONTRACT_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID contract_id) {
        if (this.contractService.delete(contract_id)) {
            return new ApiResponse(true, "", ApiCode.CONTRACT_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.CONTRACT_DELETE_ERROR);
    }
}
