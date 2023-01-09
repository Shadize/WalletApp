package ipeps.pwd.wallet.module.employee.entity.payload;

import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.fleet.entity.Fleet;
import ipeps.pwd.wallet.module.salary.entity.Salary;
import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeCreatePayload {

    String lastname;
    String firstname;
    Boolean active;
    String deletedBy;
    String address;
    String gender;
    Date birthday;
    String ssin;
    String status;
    Boolean deleted;
    Company company;
    List<Skill> skills;
    List<Timesheet> timesheets;
    List<Document> documents;
    List<Contract> contracts;
    List<Fleet> fleets;
    List<Salary> salaries;

}

