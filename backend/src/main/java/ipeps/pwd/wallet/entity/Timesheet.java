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
public class Timesheet {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "timesheet_id", updatable = false, nullable = false)
    UUID    timesheet_id;

    Date    start_date;
    Date    start_hours;
    Date    end_hours;
    String  comment;
    String  timesheet_type;

    @ManyToOne()
    @JoinColumn(name = "contract_fk",nullable = false, referencedColumnName = "contract_id",foreignKey=@ForeignKey(name = "timesheet_contract_fk" ))
    Contract contract;
}
