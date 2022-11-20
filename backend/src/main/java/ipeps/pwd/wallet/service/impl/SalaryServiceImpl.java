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
            Salary salary = new SalaryBuilder()
                    .setCreated_date(payload.getCreate_date())
                    .setTitle(payload.getTitle())
                    .setComment(payload.getComment())
                    .setAmount(payload.getAmount())
                    .build();
            return this.salaryRepository.save(salary);
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public Salary update(SalaryUpdatePayload payload) {
        Salary detail = this.detail(payload.getSalaryId());
        if(detail != null){
            detail.setCreate_date(payload.getCreate_date());
            detail.setTitle(payload.getTitle());
            detail.setComment(payload.getComment());
            detail.setAmount(payload.getAmount());
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
