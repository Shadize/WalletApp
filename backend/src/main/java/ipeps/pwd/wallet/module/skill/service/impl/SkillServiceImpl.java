package ipeps.pwd.wallet.module.skill.service.impl;

import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.module.skill.entity.builder.SkillBuilder;
import ipeps.pwd.wallet.module.skill.entity.payload.SkillCreatePayload;
import ipeps.pwd.wallet.module.skill.entity.payload.SkillUpdatePayload;
import ipeps.pwd.wallet.module.skill.repository.SkillRepository;
import ipeps.pwd.wallet.module.skill.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    SkillRepository skillRepository;

    @Override
    public List<Skill> list() {
        return this.skillRepository.findAll();
    }

    @Override
    public Skill detail(UUID skillId)
    {
        return this.skillRepository.findById(skillId).orElse(null);
    }

    @Override
    public Skill create(SkillCreatePayload payload)
    {
        try
        {
            Skill skill = new SkillBuilder()
                    .setTitle(payload.getTitle())
                    .setDescription(payload.getDescription())
                    .setEmployees(payload.getEmployees())
                    .build();
            return this.skillRepository.save(skill);
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    @Override
    public Skill update(SkillUpdatePayload payload)
    {
        Skill detail = this.detail(payload.getSkillId());
        if (detail != null)
        {
            detail.setDescription(payload.getDescription());
            detail.setTitle(payload.getTitle());
            detail.setEmployees(payload.getEmployees());
            return this.skillRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID skillId)
    {
        try {
            Skill detail = this.detail(skillId);
            if (detail != null) {
                this.skillRepository.delete(detail);
            }
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}
