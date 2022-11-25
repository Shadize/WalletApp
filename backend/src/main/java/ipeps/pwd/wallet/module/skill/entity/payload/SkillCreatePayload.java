package ipeps.pwd.wallet.module.skill.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillCreatePayload {

    String title;
    String description;
}
