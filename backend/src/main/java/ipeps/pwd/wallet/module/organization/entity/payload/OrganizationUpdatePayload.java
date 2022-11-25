package ipeps.pwd.wallet.module.organization.entity.payload;

import ipeps.pwd.wallet.module.company.entity.Company;
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
