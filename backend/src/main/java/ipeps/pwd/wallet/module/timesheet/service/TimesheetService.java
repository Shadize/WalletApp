package ipeps.pwd.wallet.module.timesheet.service;

import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import ipeps.pwd.wallet.module.timesheet.entity.payload.TimesheetCreatePayload;
import ipeps.pwd.wallet.module.timesheet.entity.payload.TimesheetUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface TimesheetService {
    public List<Timesheet> list();

    public Timesheet detail(UUID timesheetId);

    public Timesheet create(TimesheetCreatePayload payload);

    public Timesheet  update(TimesheetUpdatePayload payload);

    public boolean delete(UUID timesheetId);
}
