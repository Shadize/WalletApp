package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ContractRepository extends JpaRepository<Contract, UUID> {
}
