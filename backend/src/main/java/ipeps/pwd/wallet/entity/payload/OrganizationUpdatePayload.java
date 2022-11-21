package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationUpdatePayload {
    UUID organization_id;
    String name;
    String description;
    Company company;
}
