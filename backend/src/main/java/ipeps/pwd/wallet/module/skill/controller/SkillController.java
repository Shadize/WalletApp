package ipeps.pwd.wallet.module.skill.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.fleet.entity.Fleet;
import ipeps.pwd.wallet.module.fleet.entity.payload.FleetCreatePayload;
import ipeps.pwd.wallet.module.fleet.entity.payload.FleetUpdatePayload;
import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.module.skill.entity.payload.SkillCreatePayload;
import ipeps.pwd.wallet.module.skill.entity.payload.SkillUpdatePayload;
import ipeps.pwd.wallet.module.skill.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("skill")
@RestController
public class SkillController {
    @Autowired
    SkillService skillService;

    @GetMapping("list")
    public ApiResponse list() {
        try {
            List<Skill> skills = this.skillService.list();
            if(skills != null)
            {
                return new ApiResponse(true, skills, ApiCode.SKILL_LIST_SUCCESS);
            }
            return new ApiResponse(false, null, ApiCode.SKILL_LIST_NOT_FOUND);

        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SKILL_LIST_ERROR);
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID skillId) {
        try {
            Skill detail = this.skillService.detail(skillId);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.SKILL_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, null, ApiCode.SKILL_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SKILL_DETAIL_ERROR);
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody() SkillCreatePayload payload) {
        try {
            return new ApiResponse(true, this.skillService.create(payload), ApiCode.SKILL_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SKILL_CREATE_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() SkillUpdatePayload payload) {
        try {
            Skill skillUpdated = this.skillService.update(payload);
            if(skillUpdated != null){
                return new ApiResponse(true, skillUpdated, ApiCode.SKILL_UPDATE_SUCCESS);
            }
            return new ApiResponse(false, null, ApiCode.SKILL_UPDATE_NOT_FOUND);

        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.SKILL_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID skillId) {
        if (this.skillService.delete(skillId)) {
            return new ApiResponse(true, "", ApiCode.SKILL_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.SKILL_DELETE_ERROR);

    }


}
