package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Timesheet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TimesheetRepository extends JpaRepository<Timesheet, UUID> {
}
