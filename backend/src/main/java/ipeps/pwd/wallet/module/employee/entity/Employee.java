package ipeps.pwd.wallet.module.employee.entity;

import com.fasterxml.jackson.annotation.*;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.module.skill.service.SkillService;
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
    @Column(name = "employee_id", updatable = false, nullable = false)
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

    @ManyToOne()
    @JoinColumn(name = "company_FK",referencedColumnName = "company_id", nullable = false, foreignKey=@ForeignKey(name = "employee_company_fk"))
    private Company company;

    //@JsonIgnoreProperties({"employess","title","description"})
    @JsonIgnoreProperties({"employees", "company"})
    @ManyToMany()
    @JoinTable(
            name = "Employee_Skill",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    List<Skill> skills;

    public Employee(String lastname, String firstname, Boolean active, String deletedBy,
                    String address, String gender, Date birthday, String ssin, String status,
                    Boolean deleted, Company company, List<Skill> skills)
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
    }
}
