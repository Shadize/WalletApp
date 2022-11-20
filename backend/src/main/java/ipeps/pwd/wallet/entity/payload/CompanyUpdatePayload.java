package ipeps.pwd.wallet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyUpdatePayload {
    UUID companyID;
    String name;
    String description;
    String address;
    boolean isManaged;
    boolean isActive;
    boolean isDeleted;
    String deletedBy;
}
