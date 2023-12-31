package ipeps.pwd.wallet.module.organization.service.impl;

import ipeps.pwd.wallet.module.organization.entity.Organization;
import ipeps.pwd.wallet.module.organization.entity.builder.OrganizationBuilder;
import ipeps.pwd.wallet.module.organization.entity.payload.OrganizationCreatePayload;
import ipeps.pwd.wallet.module.organization.entity.payload.OrganizationUpdatePayload;
import ipeps.pwd.wallet.module.organization.repository.OrganizationRepository;
import ipeps.pwd.wallet.module.organization.service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class OrganizationServiceImpl implements OrganizationService {
    @Autowired
    OrganizationRepository organizationRepository;

    @Override
    public List<Organization> list(){ return organizationRepository.findAll();}

    @Override
    public Organization detail(UUID organizationId) { return organizationRepository.findById(organizationId).orElse(null);}

    @Override
    public Organization create(OrganizationCreatePayload payload){
        try{
            Organization organization = this.organizationRepository.save(new OrganizationBuilder()
                    .setName(payload.getName())
                    .setDescription(payload.getDescription())
                    .setCompany(payload.getCompany())
                    .build());
            return this.detail(organization.getOrganizationId());
        }catch (Exception e){
            throw new RuntimeException("error with object");
        }
    }

    @Override
    public Organization update(OrganizationUpdatePayload payload){
        Organization detail = this.detail(payload.getOrganizationId());
        if(detail != null){
            detail.setName(payload.getName());
            detail.setDescription(payload.getDescription());
            if(payload.getCompany() != null)
                detail.setCompany(payload.getCompany());
            else
                detail.setCompany(detail.getCompany());

            return this.organizationRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID organizationId){
        try{
            Organization detail = this.detail(organizationId);
            if(detail != null){
                this.organizationRepository.delete(detail);
                return true;
            }
            return false;
        }catch(Exception e){
            return false;
        }
    }


}
