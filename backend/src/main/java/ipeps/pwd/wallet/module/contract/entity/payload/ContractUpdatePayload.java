package ipeps.pwd.wallet.module.contract.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContractUpdatePayload {
    UUID contractId;
    String description;
    Date startDate;
    Date endDate;
    Integer nbHoursByWeek;
}
