package ipeps.pwd.wallet.module.skill.entity.payload;

import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillCreatePayload {

    String title;
    String description;
    List<Employee> employees;
}
