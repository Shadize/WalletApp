package ipeps.pwd.wallet.module.skill.entity.builder;

import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.common.model.CreateBuilder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillBuilder implements CreateBuilder<Skill> {

    String title;
    String description;

    public SkillBuilder setTitle(String title)
    {
        this.title = title;
        return this;
    }
    public SkillBuilder setDescription(String description)
    {
        this.description = description;
        return this;
    }

    @Override
    public Skill build() { return new Skill(this.title, this.description);}

}
