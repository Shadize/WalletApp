package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.entity.payload.SalaryCreatePayload;
import ipeps.pwd.wallet.entity.payload.SalaryUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface SalaryService {

    public List<Salary> list();

    public Salary detail(UUID SalaryId);

    public Salary create(SalaryCreatePayload payload);

    public Salary update(SalaryUpdatePayload payload);

    public boolean delete(UUID SalaryId);
}
