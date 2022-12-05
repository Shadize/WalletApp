package ipeps.pwd.wallet.module.organization.entity.payload;

import ipeps.pwd.wallet.module.company.entity.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationCreatePayload {
    String name;
    String description;
    Company company;
}
