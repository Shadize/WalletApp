package ipeps.pwd.wallet.module.employee.service;

import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.employee.entity.payload.EmployeeCreatePayload;
import ipeps.pwd.wallet.module.employee.entity.payload.EmployeeUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface EmployeeService {
    public List<Employee> list();

    public Employee detail(UUID employeeId);

    public Employee create(EmployeeCreatePayload payload);

    public Employee update(EmployeeUpdatePayload payload);

    public boolean delete(UUID employeeId);
}
