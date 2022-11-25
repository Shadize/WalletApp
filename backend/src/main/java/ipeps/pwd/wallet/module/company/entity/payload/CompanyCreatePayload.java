package ipeps.pwd.wallet.module.company.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyCreatePayload {
    String name;
    String description;
    String address;
    boolean isManaged;
    boolean isActive;
    boolean isDeleted;
    String deletedBy;
}
