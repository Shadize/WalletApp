package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Skill;
import ipeps.pwd.wallet.entity.payload.SkillCreatePayload;
import ipeps.pwd.wallet.entity.payload.SkillUpdatePayload;
import ipeps.pwd.wallet.repository.SkillRepository;
import ipeps.pwd.wallet.service.SkillService;
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
        return null;
    }

    @Override
    public Skill detail(UUID skillId) {
        return null;
    }

    @Override
    public Skill create(SkillCreatePayload payload) {
        return null;
    }

    @Override
    public Skill update(SkillUpdatePayload payload) {
        return null;
    }

    @Override
    public boolean delete(UUID skillId) {
        return false;
    }
}
