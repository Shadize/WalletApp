package ipeps.pwd.wallet.module.skill.entity.payload;

import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillUpdatePayload {
    UUID skill_id;

    String title;
    String description;
    List<Employee> employees;
}
