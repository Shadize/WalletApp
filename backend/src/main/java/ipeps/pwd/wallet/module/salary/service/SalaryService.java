package ipeps.pwd.wallet.module.salary.service;

import ipeps.pwd.wallet.module.salary.entity.Salary;
import ipeps.pwd.wallet.module.salary.entity.payload.SalaryCreatePayload;
import ipeps.pwd.wallet.module.salary.entity.payload.SalaryUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface SalaryService {

    public List<Salary> list();

    public Salary detail(UUID SalaryId);

    public Salary create(SalaryCreatePayload payload);

    public Salary update(SalaryUpdatePayload payload);

    public boolean delete(UUID SalaryId);
}
