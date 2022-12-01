package ipeps.pwd.wallet.module.timesheet.entity.payload;

import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimesheetCreatePayload {
    Date startDate;
    Date    startHours;
    Date    endHours;
    String  comment;
    String  timesheetType;
    Employee employee;
    Contract contract;
}
