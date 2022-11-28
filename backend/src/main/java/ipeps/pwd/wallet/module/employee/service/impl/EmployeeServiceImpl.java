package ipeps.pwd.wallet.module.employee.service.impl;


import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.employee.entity.builder.EmployeeBuilder;
import ipeps.pwd.wallet.module.employee.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.module.employee.entity.payload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.module.employee.repository.EmployeeRepository;
import ipeps.pwd.wallet.module.employee.service.EmployeeService;
import ipeps.pwd.wallet.module.organization.entity.Organization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeServiceImpl  implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public List<Employee> list() { return employeeRepository.findAll(); }

    @Override
    public Employee detail(UUID employeeId)
    {
        return employeeRepository.findById(employeeId).orElse(null);
    }
    @Override
    public Employee create(EmployeeCreatePayload payload)
    {
        try
        {
            Employee employee = this.employeeRepository.save(new EmployeeBuilder()
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
                    .setCompany(payload.getCompany())
                    .setSkills(payload.getSkills())
                    .build());
            return this.detail(employee.getEmployee_id());
        }
        catch (Exception e)
        {
            throw new RuntimeException("error with object");
        }
    }

    @Override
    public Employee update(EmployeeUpdatePayload payload)
    {
        try
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
                if(payload.getCompany() != null)
                    detail.setCompany(payload.getCompany());
                detail.setSkills(payload.getSkills());

                return this.employeeRepository.save(detail);
            }
            return detail;
        }
        catch (Exception e)
        {
            throw new RuntimeException("error with object");
        }

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
                return true;
            }
            return false;

        }
        catch(Exception e)
        {
            return false;
        }
    }

}
