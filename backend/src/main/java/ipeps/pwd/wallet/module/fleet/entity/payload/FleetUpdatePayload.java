package ipeps.pwd.wallet.module.fleet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FleetUpdatePayload {
    UUID fleet_id;
    String title;
    String description;
    String type;
    Float cost;
}
