package ipeps.pwd.wallet.entity;
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
public class Contract {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "contract_id", updatable = false, nullable = false)
    UUID    contract_id;

    String  description;
    Date    start_date;
    Date    end_date;
    Float   nb_hours_by_week;

    @ManyToOne()
    @JoinColumn(name = "employee_FK",referencedColumnName = "employee_id",nullable = false, foreignKey=@ForeignKey(name = "contract_employee_fk"))
    private Employee Employee;
}
