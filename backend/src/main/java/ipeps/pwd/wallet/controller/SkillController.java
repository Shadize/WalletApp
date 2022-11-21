package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiCode;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.payload.SkillCreatePayload;
import ipeps.pwd.wallet.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("skill")
@RestController
public class SkillController {
    @Autowired
    SkillService skillService;

    @PostMapping("create")
    public ApiResponse create(@RequestBody() SkillCreatePayload payload)
    {
        try {
            return new ApiResponse(true, this.skillService.create(payload), ApiCode.SKILL_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SKILL_CREATE_ERROR);
        }
    }


}
