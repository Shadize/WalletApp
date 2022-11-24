package ipeps.pwd.wallet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimesheetCreatePayload {
    Date startDate;
    Date    startHours;
    Date    endHours;
    String  comment;
    String  timesheetType;
}
