package ipeps.pwd.wallet.module.contract.entity.payload;

import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContractCreatePayload {
    String description;
    Date startDate;
    Date endDate;
    Integer nbHoursByWeek;
    List<Document> documents;
    List<Timesheet> timesheets;
    Employee employee;
    Company companyClient;
    Company companyBusiness;
}
