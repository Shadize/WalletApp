package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.Company;
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
