package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.builder.OrganizationBuilder;
import ipeps.pwd.wallet.entity.payload.OrganizationCreatePayload;
import ipeps.pwd.wallet.entity.payload.OrganizationUpdatePayload;
import ipeps.pwd.wallet.repository.OrganizationRepository;
import ipeps.pwd.wallet.service.OrganizationService;
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
            Organization organization = new OrganizationBuilder()
                    .setName(payload.getName())
                    .setDescription(payload.getDescription())
                    .build();
            return this.organizationRepository.save(organization);
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public Organization update(OrganizationUpdatePayload payload){
        Organization detail = this.detail(payload.getOrganization_id());
        if(detail != null){
            detail.setName(payload.getName());
            detail.setDescription(payload.getDescription());
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
            }
            return true;
        }catch(Exception e){
            return false;
        }
    }


}
