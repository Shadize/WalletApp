package ipeps.pwd.wallet.module.skill.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.skill.entity.payload.SkillCreatePayload;
import ipeps.pwd.wallet.module.skill.service.SkillService;
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
