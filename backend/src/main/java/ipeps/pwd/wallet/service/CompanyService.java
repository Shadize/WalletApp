package ipeps.pwd.wallet.service;


import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface CompanyService {
    public List<Company> list();

    public Company detail(UUID companyId);

    public Company create(CompanyCreatePayload payload);

    public Company  update(CompanyUpdatePayload payload);

    public boolean delete(UUID companyId);
}
