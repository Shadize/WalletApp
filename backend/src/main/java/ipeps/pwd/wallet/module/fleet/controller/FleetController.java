package ipeps.pwd.wallet.module.fleet.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.employee.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.module.employee.entity.payload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.module.fleet.entity.Fleet;
import ipeps.pwd.wallet.module.fleet.entity.payload.FleetCreatePayload;
import ipeps.pwd.wallet.module.fleet.entity.payload.FleetUpdatePayload;
import ipeps.pwd.wallet.module.fleet.service.FleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("fleet")
public class FleetController {
    @Autowired
    FleetService fleetService;

    @GetMapping("list")
    public ApiResponse list() {
        try {
            List<Fleet> fleets = this.fleetService.list();
            if(fleets != null)
            {
                return new ApiResponse(true, fleets, ApiCode.FLEET_LIST_SUCCESS);
            }
            return new ApiResponse(false, null, ApiCode.FLEET_LIST_NOT_FOUND);

        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.FLEET_LIST_ERROR);
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID detailId) {
        try {
            Fleet detail = this.fleetService.detail(detailId);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.FLEET_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, null, ApiCode.FLEET_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.FLEET_DETAIL_ERROR);
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody() FleetCreatePayload payload) {
        try {
            return new ApiResponse(true, this.fleetService.create(payload), ApiCode.FLEET_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.FLEET_CREATE_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() FleetUpdatePayload payload) {
        try {
            Fleet fleetUpdated = this.fleetService.update(payload);
            if(fleetUpdated != null){
                return new ApiResponse(true, fleetUpdated, ApiCode.FLEET_UPDATE_SUCCESS);
            }
            return new ApiResponse(false, null, ApiCode.FLEET_UPDATE_NOT_FOUND);

        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.FLEET_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID fleetId) {
        if (this.fleetService.delete(fleetId)) {
            return new ApiResponse(true, "", ApiCode.FLEET_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.FLEET_DELETE_ERROR);

    }

}
