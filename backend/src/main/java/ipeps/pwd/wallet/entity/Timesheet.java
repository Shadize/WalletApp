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

    public Timesheet(Date startDate, Date startHours, Date endHours, String comment, String timesheetType) {
        this.startDate = startDate;
        this.startHours = startHours;
        this.endHours = endHours;
        this.comment = comment;
        this.timesheetType = timesheetType;
    }

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "timesheet_id", updatable = false, nullable = false)
    UUID    timesheetId;

    Date    startDate;
    Date    startHours;
    Date    endHours;
    String  comment;
    String  timesheetType;

    @ManyToOne()
    @JoinColumn(name = "contract_fk",nullable = false, referencedColumnName = "contract_id",foreignKey=@ForeignKey(name = "timesheet_contract_fk" ))
    Contract contract;

    @ManyToOne()
    @JoinColumn(name = "employee_FK",referencedColumnName = "employee_id",nullable = false, foreignKey=@ForeignKey(name = "timesheet_employee_fk"))
    private Employee employee;


}
