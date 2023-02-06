package ipeps.pwd.wallet.module.salary.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Salary {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "salary_id", updatable = false, nullable = false)
    UUID    salaryId;

    Date    createDate;
    String  title;
    String  comment;
    Float   amount;

    @JsonIgnoreProperties({"skills","company","timesheets","documents","contracts","fleets","salaries"})
    @ManyToOne()
    @JoinTable(
            name = "employee_salary",
            joinColumns = @JoinColumn(name = "salary_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id"))
    private Employee employee;

    public Salary(Date createDate, String title, String comment, Float amount, Employee employee) {
        this.createDate = createDate;
        this.title = title;
        this.comment = comment;
        this.amount = amount;
        this.employee = employee;
    }
}