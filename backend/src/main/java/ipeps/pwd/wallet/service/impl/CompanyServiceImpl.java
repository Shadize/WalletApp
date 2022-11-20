package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.repository.CompanyRepository;
import ipeps.pwd.wallet.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;

public class CompanyServiceImpl implements CompanyService {

    @Autowired
    CompanyRepository companyRepository;

    @Override
    public List<Company> list() {
        return null;
    }

    @Override
    public Company detail(UUID companyId) {
        return null;
    }

    @Override
    public Company create(CompanyCreatePayload payload) {
        return null;
    }

    @Override
    public Company update(CompanyUpdatePayload payload) {
        return null;
    }

    @Override
    public boolean delete(UUID companyId) {
        return false;
    }
}
