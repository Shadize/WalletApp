package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Timesheet;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.entity.payload.TimesheetCreatePayload;
import ipeps.pwd.wallet.entity.payload.TimesheetUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface TimesheetService {
    public List<Timesheet> list();

    public Timesheet detail(UUID timesheetId);

    public Timesheet create(TimesheetCreatePayload payload);

    public Timesheet  update(TimesheetUpdatePayload payload);

    public boolean delete(UUID timesheetId);
}
