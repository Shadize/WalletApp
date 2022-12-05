package ipeps.pwd.wallet.module.salary.entity.payload;

import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalaryUpdatePayload {
    UUID salaryId;
    Date createDate;
    String  title;
    String  comment;
    Float   amount;
    Employee employee;
}
