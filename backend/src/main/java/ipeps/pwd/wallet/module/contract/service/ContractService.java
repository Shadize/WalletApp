package ipeps.pwd.wallet.module.contract.service;


import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.contract.entity.payload.ContractCreatePayload;
import ipeps.pwd.wallet.module.contract.entity.payload.ContractUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface ContractService {
    public List<Contract> list();

    public Contract detail(UUID contractId);

    public Contract create(ContractCreatePayload payload);

    public Contract  update(ContractUpdatePayload payload);

    public boolean delete(UUID contractId);
}
