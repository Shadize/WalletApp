package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Timesheet;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface TimesheetService {
    public List<Timesheet> list();

    public Timesheet detail(UUID timesheetId);

    public Timesheet create(CompanyCreatePayload payload);

    public Timesheet  update(CompanyUpdatePayload payload);

    public boolean delete(UUID timesheetId);
}
