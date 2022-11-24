package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.builder.CompanyBuilder;
import ipeps.pwd.wallet.entity.builder.ContractBuilder;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.entity.payload.ContractUpdatePayload;
import ipeps.pwd.wallet.repository.CompanyRepository;
import ipeps.pwd.wallet.repository.ContractRepository;
import ipeps.pwd.wallet.service.ContractService;
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
            Contract contract = new ContractBuilder()
                    .setDescription(payload.getDescription())
                    .setStartDate(payload.getStartDate())
                    .setEndDate(payload.getEndDate())
                    .setNbHoursByWeek(payload.getNbHoursByWeek())
                    .build();
            return this.contractRepository.save(contract);
        }catch(Exception e){
            return null;
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
