package ipeps.pwd.wallet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillCreatePayload {

    String title;
    String description;
}
