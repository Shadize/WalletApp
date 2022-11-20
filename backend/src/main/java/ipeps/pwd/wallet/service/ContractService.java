package ipeps.pwd.wallet.service;


import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Contract;
import ipeps.pwd.wallet.entity.payload.CompanyCreatePayload;
import ipeps.pwd.wallet.entity.payload.CompanyUpdatePayload;
import ipeps.pwd.wallet.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.entity.payload.ContractUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface ContractService {
    public List<Contract> list();

    public Contract detail(UUID contractId);

    public Contract create(ContractCreatePayload payload);

    Contract create(ContractUpdatePayload payload);

    public Contract  update(ContractUpdatePayload payload);

    public boolean delete(UUID contractId);
}
