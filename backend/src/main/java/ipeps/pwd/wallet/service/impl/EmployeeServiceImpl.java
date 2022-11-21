package ipeps.pwd.wallet.service.impl;


import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.entity.builder.EmployeeBuilder;
import ipeps.pwd.wallet.entity.builder.SalaryBuilder;
import ipeps.pwd.wallet.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.entity.payload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.repository.EmployeeRepository;
import ipeps.pwd.wallet.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeServiceImpl  implements EmployeeService {


    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public List<Employee> list() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee detail(UUID employeeId) {
        return employeeRepository.findById(employeeId).orElse(null);
    }
    @Override
    public Employee create(EmployeeCreatePayload payload)
    {
        try
        {
            Employee employee = new EmployeeBuilder()
                    .setLastname(payload.getLastname())
                    .setFirstname(payload.getFirstname())
                    .setActive(payload.getActive())
                    .setDeleted_by(payload.getDeleted_by())
                    .setAddress(payload.getAddress())
                    .setGender(payload.getGender())
                    .setBirthday(payload.getBirthday())
                    .setSsin(payload.getSsin())
                    .setStatus(payload.getStatus())
                    .setDeleted(payload.getDeleted())
                    .build();
            return this.employeeRepository.save(employee);

        }
        catch (Exception e)
        {
            return null;
        }
    }

    @Override
    public Employee update(EmployeeUpdatePayload payload)
    {
        Employee detail = this.detail(payload.getEmployee_id());
        if(detail != null)
        {
            detail.setLastname(payload.getLastname());
            detail.setFirstname(payload.getFirstname());
            detail.setActive(payload.getActive());
            detail.setDeleted_by(payload.getDeleted_by());
            detail.setAddress(payload.getAddress());
            detail.setGender(payload.getGender());
            detail.setBirthday(payload.getBirthday());
            detail.setSsin(payload.getSsin());
            detail.setStatus(payload.getStatus());
            detail.setDeleted(payload.getDeleted());
            return this.employeeRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID employeeId)
    {
        try
        {
            Employee detail = this.detail(employeeId);
            if (detail != null)
            {
                this.employeeRepository.delete(detail);
            }
            return true;
        }
        catch(Exception e)
        {
            return false;
        }
    }
}
