package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.entity.Skill;

import ipeps.pwd.wallet.entity.payload.SkillCreatePayload;
import ipeps.pwd.wallet.entity.payload.SkillUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface SkillService {
    public List<Skill> list();

    public Skill detail(UUID skillId);

    public Skill create(SkillCreatePayload payload);

    public Skill update(SkillUpdatePayload payload);

    public boolean delete(UUID skillId);
}
