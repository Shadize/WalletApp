package ipeps.pwd.wallet.module.contract.entity.payload;

import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
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
    List<Document> documents;
    List<Timesheet> timesheets;
}
