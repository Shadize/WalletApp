package ipeps.pwd.wallet.module.employee.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.module.skill.service.SkillService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
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

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "Employee_Skill",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    List<Skill> skills;

    public void serialize(){
        List<Skill> temp = new ArrayList<Skill>();
        for(Skill skill : this.skills)
        {
            Skill sk = new Skill();
            sk.setTitle(skill.getTitle());
            sk.setDescription(skill.getDescription());
            sk.setSkillId(skill.getSkillId());
            // sk.setEmployees(skill.getEmployees());
            temp.add(sk);
        }

         this.skills = temp;
    }


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
