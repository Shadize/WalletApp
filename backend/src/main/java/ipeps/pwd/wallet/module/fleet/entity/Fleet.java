package ipeps.pwd.wallet.module.fleet.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Fleet {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "fleet_id", updatable = false, nullable = false)
    UUID fleetId;
    String title;
    String description;
    String type;
    Float cost;
    @JsonIgnoreProperties({"skills","company","timesheets","documents","contracts","fleets","salaries"})
    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinColumn(name = "employee_id")
    private Employee employee;

    public Fleet(String title, String description, String type, Float cost, Employee employee) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.cost = cost;
        this.employee = employee;
    }
}
