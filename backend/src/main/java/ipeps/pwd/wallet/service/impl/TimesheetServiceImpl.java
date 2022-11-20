package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Timesheet;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.service.TimesheetService;

import java.util.List;
import java.util.UUID;

public class TimesheetServiceImpl implements TimesheetService {

    @Override
    public List<Timesheet> list() {
        return null;
    }

    @Override
    public Timesheet detail(UUID timesheetId) {
        return null;
    }

    @Override
    public Timesheet create(CompanyCreatePayload payload) {
        return null;
    }

    @Override
    public Timesheet update(CompanyUpdatePayload payload) {
        return null;
    }

    @Override
    public boolean delete(UUID timesheetId) {
        return false;
    }
}
