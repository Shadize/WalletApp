package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
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
    UUID fleet_id;
    String title;
    String description;
    String type;
    Float cost;

    @ManyToOne()
    @JoinColumn(name = "employee_FK",referencedColumnName = "employee_id",nullable = false, foreignKey=@ForeignKey(name = "fleet_employee_fk"))
    private Employee employee;
}
