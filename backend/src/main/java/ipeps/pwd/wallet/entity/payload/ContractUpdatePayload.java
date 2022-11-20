package ipeps.pwd.wallet.entity.payload;

import java.util.Date;
import java.util.UUID;

public class ContractUpdatePayload {
    UUID contractId;
    String description;
    Date startDate;
    Date endDate;
    Integer nbHoursByWeek;
}
