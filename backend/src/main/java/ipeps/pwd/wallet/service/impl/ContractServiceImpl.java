package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.entity.payload.ContractUpdatePayload;
import ipeps.pwd.wallet.repository.CompanyRepository;
import ipeps.pwd.wallet.repository.ContractRepository;
import ipeps.pwd.wallet.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;

public class ContractServiceImpl implements ContractService {
    @Autowired
    ContractRepository contractRepository;

    @Override
    public List<Contract> list() {
        return null;
    }

    @Override
    public Contract detail(UUID contractId) {
        return null;
    }

    @Override
    public Contract create(ContractCreatePayload payload) {
        return null;
    }

    @Override
    public Contract create(ContractUpdatePayload payload) {
        return null;
    }

    @Override
    public Contract update(ContractUpdatePayload payload) {
        return null;
    }

    @Override
    public boolean delete(UUID contractId) {
        return false;
    }
}
