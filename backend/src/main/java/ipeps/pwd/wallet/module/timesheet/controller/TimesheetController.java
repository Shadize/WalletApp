package ipeps.pwd.wallet.module.timesheet.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.contract.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.module.contract.entity.payload.ContractUpdatePayload;
import ipeps.pwd.wallet.module.contract.service.ContractService;
import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import ipeps.pwd.wallet.module.timesheet.entity.payload.TimesheetCreatePayload;
import ipeps.pwd.wallet.module.timesheet.entity.payload.TimesheetUpdatePayload;
import ipeps.pwd.wallet.module.timesheet.service.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("timesheet")
public class TimesheetController {

    @Autowired
    TimesheetService timesheetService;

    @PostMapping("create")
    public ApiResponse create(@RequestBody() TimesheetCreatePayload payload) {
        try {
            return new ApiResponse(true, this.timesheetService.create(payload), ApiCode.TIMESHEET_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.TIMESHEET_CREATE_ERROR);
        }
    }

    @GetMapping("list")
    public ApiResponse list() {
        try {
            return new ApiResponse(true, this.timesheetService.list(), ApiCode.TIMESHEET_LIST_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.TIMESHEET_LIST_ERROR);
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID timesheet_id) {
        try {
            Timesheet detail = this.timesheetService.detail(timesheet_id);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.TIMESHEET_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, detail, ApiCode.TIMESHEET_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.TIMESHEET_DETAIL_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() TimesheetUpdatePayload payload) {
        try {
            Timesheet timesheetUpdated = this.timesheetService.update(payload);
            if(timesheetUpdated != null){
                return new ApiResponse(true, timesheetUpdated, ApiCode.TIMESHEET_UPDATE_SUCCESS);
            }
            return new ApiResponse(true, null, ApiCode.TIMESHEET_UPDATE_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.TIMESHEET_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID timesheet_id) {
        if (this.timesheetService.delete(timesheet_id)) {
            return new ApiResponse(true, "", ApiCode.TIMESHEET_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.TIMESHEET_DELETE_ERROR);
    }
}
