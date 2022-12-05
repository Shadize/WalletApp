package ipeps.pwd.wallet.module.salary.repository;

import ipeps.pwd.wallet.module.salary.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SalaryRepository extends JpaRepository<Salary, UUID> {
}
