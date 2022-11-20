package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Skill;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillBuilder implements CreateBuilder<Skill>{

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
