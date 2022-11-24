package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.builder.CompanyBuilder;
import ipeps.pwd.wallet.entity.builder.DocumentBuilder;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.entity.payload.DocumentCreatePayload;
import ipeps.pwd.wallet.entity.payload.DocumentUpdatePayload;
import ipeps.pwd.wallet.repository.CompanyRepository;
import ipeps.pwd.wallet.repository.DocumentRepository;
import ipeps.pwd.wallet.service.CompanyService;
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
                    .build();
            return this.companyRepository.save(company);
        }catch(Exception e){
            return null;
        }
    }

    @Override
    public Company update(CompanyUpdatePayload payload) {
        Company detail = this.detail(payload.getCompanyID());
        if(detail != null){
            detail.setName(payload.getName());
            detail.setDescription(payload.getDescription());
            detail.setAddress(payload.getAddress());
            detail.setManaged(payload.isManaged());
            detail.setActive(payload.isActive());
            detail.setDeleted(payload.isDeleted());
            detail.setDeletedBy(payload.getDeletedBy());
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
