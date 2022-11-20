package ipeps.pwd.wallet.entity.payload;

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
    Date create_date;
    String  title;
    String  comment;
    Float   amount;
}
