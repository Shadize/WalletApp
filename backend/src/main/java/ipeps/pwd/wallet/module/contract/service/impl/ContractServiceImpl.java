package ipeps.pwd.wallet.module.contract.service.impl;

import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.contract.entity.builder.ContractBuilder;
import ipeps.pwd.wallet.module.contract.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.module.contract.entity.payload.ContractUpdatePayload;
import ipeps.pwd.wallet.module.contract.repository.ContractRepository;
import ipeps.pwd.wallet.module.contract.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ContractServiceImpl implements ContractService {
    @Autowired
    ContractRepository contractRepository;

    @Override
    public List<Contract> list() {
        return contractRepository.findAll();
    }

    @Override
    public Contract detail(UUID contractId) {
        return contractRepository.findById(contractId).orElse(null);
    }

    @Override
    public Contract create(ContractCreatePayload payload) {
        try{
            ContractBuilder builder = new ContractBuilder()
                    .setDescription(payload.getDescription())
                    .setStartDate(payload.getStartDate())
                    .setEndDate(payload.getEndDate())
                    .setNbHoursByWeek(payload.getNbHoursByWeek())
                    .setDocuments(payload.getDocuments())
                    .setTimesheets(payload.getTimesheets())
                    .setCompanyBusiness(payload.getCompanyBusiness())
                    .setCompanyClient(payload.getCompanyClient());
            if(payload.getEmployee() != null)
                builder.setEmployee(payload.getEmployee());
            return this.contractRepository.save(builder.build());

        }catch(Exception e){
            throw new RuntimeException("error with object");
        }
    }

    @Override
    public Contract update(ContractUpdatePayload payload) {
        Contract detail = this.detail(payload.getContractId());
        if(detail != null){
            detail.setDescription(payload.getDescription());
            detail.setStartDate(payload.getStartDate());
            detail.setEndDate(payload.getEndDate());
            detail.setNbHoursByWeek(payload.getNbHoursByWeek());
            if(payload.getEmployee() != null)
                detail.setEmployee(payload.getEmployee());
            else
                detail.setEmployee(detail.getEmployee());
            detail.setCompanyBusiness(payload.getCompanyBusiness());
            detail.setCompanyClient(payload.getCompanyClient());
            return this.contractRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID contractId) {
        try {
            Contract detail = this.detail(contractId);
            if (detail != null) {
                this.contractRepository.delete(detail);
            }
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}
