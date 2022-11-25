package ipeps.pwd.wallet.module.employee.entity.payload;

import ipeps.pwd.wallet.module.company.entity.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeCreatePayload {

    String lastname;
    String firstname;
    Boolean active;
    String deleted_by;
    String address;
    String gender;
    Date birthday;
    String ssin;
    String status;
    Boolean deleted;
    Company company;

}

