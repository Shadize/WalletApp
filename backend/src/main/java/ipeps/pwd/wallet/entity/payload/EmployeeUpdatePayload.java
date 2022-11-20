package ipeps.pwd.wallet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeUpdatePayload {
    UUID employee_id;
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
}
