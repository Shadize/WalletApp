package ipeps.pwd.wallet.module.timesheet.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
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
public class Timesheet {

    public Timesheet(Date startDate, Date startHours, Date endHours, String comment, String timesheetType, Employee employee, Contract contract) {
        this.startDate = startDate;
        this.startHours = startHours;
        this.endHours = endHours;
        this.comment = comment;
        this.timesheetType = timesheetType;
        this.employee = employee;
        this.contract = contract;
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

    @JsonIgnoreProperties({"timesheets", "documents","companyBusiness","companyClient", "employee"})
    @ManyToOne()
    @JoinColumn(name = "contract_FK",referencedColumnName = "contract_id")
    Contract contract;

    @JsonIgnoreProperties({"skills","company","timesheets","documents","contracts","fleets","salaries"})
    @ManyToOne()
    @JoinTable(
            name = "employee_timesheet",
            joinColumns = @JoinColumn(name = "timesheet_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id"))
    Employee employee;

}
