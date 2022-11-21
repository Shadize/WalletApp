package ipeps.pwd.wallet.entity.payload;

import ipeps.pwd.wallet.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalaryCreatePayload {
    Date createDate;
    String  title;
    String  comment;
    Float   amount;
    Employee employee;
}
