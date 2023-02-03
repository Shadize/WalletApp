package ipeps.pwd.wallet.module.employee.entity;

import com.fasterxml.jackson.annotation.*;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.fleet.entity.Fleet;
import ipeps.pwd.wallet.module.salary.entity.Salary;
import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.module.skill.service.SkillService;
import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.map.ObjectMapper;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "employeeId")
public class Employee {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "employee_id", updatable = true, nullable = false)
    UUID employeeId;

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

    @JsonIgnoreProperties({"employees", "organizations", "documents", "timesheets", "contracts", "fleets", "salaries", "skills", "contractsBusiness", "contractsClient"})
    @ManyToOne()
    @JoinColumn(name = "company_FK",referencedColumnName = "company_id", nullable = false, foreignKey=@ForeignKey(name = "employee_company_fk"))
    private Company company;

    @JsonIgnoreProperties({"employee"})
    @OneToMany(mappedBy = "employee")
    List<Timesheet> timesheets;

    @JsonIgnoreProperties({"employee", "company", "contract"})
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    List<Document> documents;

    @JsonIgnoreProperties({"employee", "companyClient", "companyBusiness", "timesheets", "documents"})
    @OneToMany(mappedBy = "employee")
    List<Contract> contracts;

    @JsonIgnoreProperties({"employee"})
    @OneToMany(mappedBy = "employee")
    List<Fleet> fleets;

    @JsonIgnoreProperties({"employee"})
    @OneToMany(mappedBy = "employee")
    List<Salary> salaries;

    //@JsonIgnoreProperties({"employess","title","description"})
    @JsonIgnoreProperties({"employees"})
    @ManyToMany()
    @JoinTable(
            name = "Employee_Skill",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    List<Skill> skills;

    public Employee(String lastname, String firstname, Boolean active, String deletedBy,
                    String address, String gender, Date birthday, String ssin, String status,
                    Boolean deleted,
                    List<Contract> contracts, Company company, List<Document> documents,
                    List<Fleet> fleets, List<Salary> salaries, List<Skill> skills, List<Timesheet> timesheets)
    {
        this.lastname = lastname;
        this.firstname = firstname;
        this.active = active;
        this.deletedBy = deletedBy;
        this.address = address;
        this.gender = gender;
        this.birthday = birthday;
        this.ssin = ssin;
        this.status = status;
        this.deleted = deleted;
        this.company = company;
        this.skills = skills;
        this.contracts = contracts;
        this.documents = documents;
        this.fleets = fleets;
        this.salaries = salaries;
        this.timesheets = timesheets;
    }
}
