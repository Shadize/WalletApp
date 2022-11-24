package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Timesheet;
import ipeps.pwd.wallet.entity.builder.TimesheetBuilder;
import ipeps.pwd.wallet.entity.payload.*;
import ipeps.pwd.wallet.repository.TimesheetRepository;
import ipeps.pwd.wallet.service.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TimesheetServiceImpl implements TimesheetService {

    @Autowired
    TimesheetRepository timesheetRepository;

    @Override
    public List<Timesheet> list() {
        return timesheetRepository.findAll();
    }

    @Override
    public Timesheet detail(UUID timesheetId) {
        return timesheetRepository.findById(timesheetId).orElse(null);
    }

    @Override
    public Timesheet create(TimesheetCreatePayload payload) {
        try{
            Timesheet timesheet = new TimesheetBuilder()
                    .setStartDate(payload.getStartDate())
                    .setStartHours(payload.getStartHours())
                    .setEndHours(payload.getEndHours())
                    .setTimesheetType(payload.getTimesheetType())
                    .build();
            return this.timesheetRepository.save(timesheet);
        }catch(Exception e){
            return null;
        }
    }

    @Override
    public Timesheet update(TimesheetUpdatePayload payload) {
        Timesheet detail = this.detail(payload.getTimesheetId());
        if(detail != null){
            detail.setStartDate(payload.getStartDate());
            detail.setStartHours(payload.getStartHours());
            detail.setEndHours(payload.getEndHours());
            detail.setTimesheetType(payload.getTimesheetType());
            return this.timesheetRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID timesheetId) {
        try {
            Timesheet detail = this.detail(timesheetId);
            if (detail != null) {
                this.timesheetRepository.delete(detail);
            }
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}
