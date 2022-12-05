package ipeps.pwd.wallet.module.company.service;


import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.company.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.module.company.entity.payload.CompanyUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface CompanyService {
    public List<Company> list();

    public Company detail(UUID companyId);

    public Company create(CompanyCreatePayload payload);

    public Company  update(CompanyUpdatePayload payload);

    public boolean delete(UUID companyId);
}
