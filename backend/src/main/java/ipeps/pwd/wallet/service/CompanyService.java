package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.entity.Company;

import java.util.List;
import java.util.UUID;

public interface CompanyService {
    public List<Company> list();

    public Company detail(UUID companyId);

    // public Company create(PersonCreatePayload payload);

    // public Company update(PersonUpdatePayload payload);

    public boolean delete(UUID personId);
}
