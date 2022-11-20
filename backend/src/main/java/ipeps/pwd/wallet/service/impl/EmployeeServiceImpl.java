package ipeps.pwd.wallet.service.impl;


import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Employee;
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
        return null;
    }

    @Override
    public Employee detail(UUID employeeId) {
        return null;
    }

    @Override
    public Company create(EmployeeCreatePayload payload) {
        return null;
    }

    @Override
    public Company update(EmployeeUpdatePayload payload) {
        return null;
    }

    @Override
    public boolean delete(UUID employeeId) {
        return false;
    }
}
