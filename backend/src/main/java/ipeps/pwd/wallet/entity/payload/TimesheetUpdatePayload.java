package ipeps.pwd.wallet.entity.payload;

import java.util.Date;
import java.util.UUID;

public class TimesheetUpdatePayload {
    UUID timesheetId;
    Date startDate;
    Date    startHours;
    Date    endHours;
    String  comment;
    String  timesheetType;
}
