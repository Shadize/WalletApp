package ipeps.pwd.wallet.module.skill.entity.builder;

import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.common.model.CreateBuilder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillBuilder implements CreateBuilder<Skill> {

    String title;
    String description;
    List<Employee> employees;

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
    public SkillBuilder setEmployees(List<Employee> employees)
    {
        this.employees = employees;
        return this;
    }

    @Override
    public Skill build() { return new Skill(this.title, this.description, this.employees);}

}
