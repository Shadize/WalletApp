package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.Timesheet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimesheetBuilder implements CreateBuilder<Timesheet> {

    Date    startDate;
    Date    startHours;
    Date    endHours;
    String  comment;
    String  timesheetType;

    public TimesheetBuilder setStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }

    public TimesheetBuilder setStartHours(Date startHours) {
        this.startHours = startHours;
        return this;
    }

    public TimesheetBuilder setEndHours(Date endHours) {
        this.endHours = endHours;
        return this;
    }

    public TimesheetBuilder setComment(String comment) {
        this.comment = comment;
        return this;
    }

    public TimesheetBuilder setTimesheetType(String timesheetType ) {
        this.timesheetType = timesheetType;
        return this;
    }
    @Override
    public Timesheet build() {
        return new Timesheet(this.startDate, this.startHours, this.endHours, this.comment, this.timesheetType);
    }
}
