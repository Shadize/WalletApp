package ipeps.pwd.wallet.module.timesheet.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimesheetUpdatePayload {
    UUID timesheetId;
    Date startDate;
    Date    startHours;
    Date    endHours;
    String  comment;
    String  timesheetType;
}
