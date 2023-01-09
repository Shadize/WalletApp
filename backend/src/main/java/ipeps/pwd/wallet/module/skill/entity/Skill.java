package ipeps.pwd.wallet.module.skill.entity;

import com.fasterxml.jackson.annotation.*;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Skill {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "skill_id", updatable = false, nullable = false)
    UUID skillId;

    String title;
    String description;

    //@JsonIgnoreProperties({"lastname","firstname","active", "deletedBy","address","gender","birthday","ssin", "status", "deleted","company","skills"})
    @JsonIgnoreProperties({"skills","company"})
    @ManyToMany(mappedBy = "skills")
    List<Employee> employees;


    public Skill(String title, String description, List<Employee> employees) {
        this.title = title;
        this.description = description;
        this.employees = employees;
    }

}
