package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.entity.builder.SalaryBuilder;
import ipeps.pwd.wallet.entity.payload.SalaryCreatePayload;
import ipeps.pwd.wallet.entity.payload.SalaryUpdatePayload;
import ipeps.pwd.wallet.repository.SalaryRepository;
import ipeps.pwd.wallet.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SalaryServiceImpl implements SalaryService {

    @Autowired
    SalaryRepository salaryRepository;

    @Override
    public List<Salary> list() {
        return salaryRepository.findAll();
    }

    @Override
    public Salary detail(UUID salaryId) {
        return salaryRepository.findById(salaryId).orElse(null);
    }

    @Override
    public Salary create(SalaryCreatePayload payload) {
        try{
            Salary salary = this.salaryRepository.save(new SalaryBuilder()
                    .setCreatedDate(payload.getCreateDate())
                    .setTitle(payload.getTitle())
                    .setComment(payload.getComment())
                    .setAmount(payload.getAmount())
                    .setEmployee(payload.getEmployee())
                    .build());
            return this.detail(salary.getSalary_id());
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Salary update(SalaryUpdatePayload payload) {
        Salary detail = this.detail(payload.getSalaryId());
        if(detail != null){
            detail.setCreateDate(payload.getCreateDate());
            detail.setTitle(payload.getTitle());
            detail.setComment(payload.getComment());
            detail.setAmount(payload.getAmount());
            detail.setEmployee(payload.getEmployee());
            return this.salaryRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID salaryId) {
        try {
            Salary detail = this.detail(salaryId);
            if (detail != null) {
                this.salaryRepository.delete(detail);
            }
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}
