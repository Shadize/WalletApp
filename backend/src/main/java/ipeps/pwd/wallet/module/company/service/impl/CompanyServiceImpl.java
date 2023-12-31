package ipeps.pwd.wallet.module.company.service.impl;

import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.company.entity.builder.CompanyBuilder;
import ipeps.pwd.wallet.module.company.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.module.company.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.module.company.repository.CompanyRepository;
import ipeps.pwd.wallet.module.company.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    CompanyRepository companyRepository;

    @Override
    public List<Company> list() {
        return companyRepository.findAll();
    }

    @Override
    public Company detail(UUID repositoryId) {
        return companyRepository.findById(repositoryId).orElse(null);
    }

    @Override
    public Company create(CompanyCreatePayload payload) {
        try{
            Company company = new CompanyBuilder()
                    .setName(payload.getName())
                    .setDescription(payload.getDescription())
                    .setAddress(payload.getAddress())
                    .setIsManaged(payload.isManaged())
                    .setActive(payload.isActive())
                    .setDeleted(payload.isDeleted())
                    .setDeletedBy(payload.getDeletedBy())
                    .setEmployees(payload.getEmployees())
                    .setOrganizations(payload.getOrganizations())
                    .setDocuments(payload.getDocuments())
                    .setContractsBusiness(payload.getContractsBusiness())
                    .setContractsClient(payload.getContractsClient())
                    .build();
            return this.companyRepository.save(company);
        }catch(Exception e){
            return null;
        }
    }

    @Override
    public Company update(CompanyUpdatePayload payload) {
        Company detail = this.detail(payload.getCompanyId());
        if(detail != null){
            detail.setName(payload.getName());
            detail.setDescription(payload.getDescription());
            detail.setAddress(payload.getAddress());
            detail.setManaged(payload.isManaged());
            detail.setActive(payload.isActive());
            detail.setDeleted(payload.isDeleted());
            detail.setDeletedBy(payload.getDeletedBy());
            detail.setEmployees(payload.getEmployees());
            detail.setOrganizations(payload.getOrganizations());
            detail.setDocuments(payload.getDocuments());
            detail.setContractsBusiness(payload.getContractsBusiness());
            detail.setContractsClient(payload.getContractsClient());
            return this.companyRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID companyId) {
        try {
            Company detail = this.detail(companyId);
            if (detail != null) {
                this.companyRepository.delete(detail);
            }
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}
