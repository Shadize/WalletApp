package ipeps.pwd.wallet.entity.payload;

import java.util.Date;
import java.util.UUID;

public class TimesheetCreatePayload {
    Date startDate;
    Date    startHours;
    Date    endHours;
    String  comment;
    String  timesheetType;
}
