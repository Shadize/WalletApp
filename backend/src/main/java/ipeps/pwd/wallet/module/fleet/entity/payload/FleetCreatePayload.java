package ipeps.pwd.wallet.module.fleet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FleetCreatePayload {

    String title;
    String description;
    String type;
    Float cost;
}
