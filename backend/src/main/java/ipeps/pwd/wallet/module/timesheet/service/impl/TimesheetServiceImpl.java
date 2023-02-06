package ipeps.pwd.wallet.module.timesheet.service.impl;

import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import ipeps.pwd.wallet.module.timesheet.entity.builder.TimesheetBuilder;
import ipeps.pwd.wallet.module.timesheet.entity.payload.TimesheetCreatePayload;
import ipeps.pwd.wallet.module.timesheet.entity.payload.TimesheetUpdatePayload;
import ipeps.pwd.wallet.module.timesheet.repository.TimesheetRepository;
import ipeps.pwd.wallet.module.timesheet.service.TimesheetService;
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
            System.out.println(payload);
            Timesheet timesheet = new TimesheetBuilder()
                    .setStartDate(payload.getStartDate())
                    .setStartHours(payload.getStartHours())
                    .setEndHours(payload.getEndHours())
                    .setTimesheetType(payload.getTimesheetType())
                    .setComment((payload.getComment()))
                    .setContract(payload.getContract())
                    .setEmployee(payload.getEmployee())
                    .build();
            return this.timesheetRepository.save(timesheet);
        }catch(Exception e){
            throw new RuntimeException(e) ;
        }
    }

    @Override
    public Timesheet update(TimesheetUpdatePayload payload) {
        System.out.println(payload);
        Timesheet detail = this.detail(payload.getTimesheetId());
        if(detail != null){
            detail.setStartDate(payload.getStartDate());
            detail.setStartHours(payload.getStartHours());
            detail.setEndHours(payload.getEndHours());
            detail.setTimesheetType(payload.getTimesheetType());
            detail.setComment(payload.getComment());

            if(payload.getEmployee() != null)
                detail.setEmployee(payload.getEmployee());
            else
                detail.setEmployee(detail.getEmployee());

            if(payload.getContract() != null)
                detail.setContract(payload.getContract());
            else
                detail.setContract(detail.getContract());

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
