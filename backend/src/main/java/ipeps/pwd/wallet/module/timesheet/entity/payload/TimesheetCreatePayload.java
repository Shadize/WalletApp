package ipeps.pwd.wallet.module.timesheet.entity.payload;

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
}
