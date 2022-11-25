package ipeps.pwd.wallet.module.timesheet.repository;

import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TimesheetRepository extends JpaRepository<Timesheet, UUID> {
}
