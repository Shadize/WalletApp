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
public class Salary {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "salary_id", updatable = false, nullable = false)
    UUID    salary_id;

    Date    create_date;
    String  title;
    String  comment;
    Float   amount;

    @ManyToOne()
    @JoinColumn(name = "employee_FK",referencedColumnName = "employee_id",nullable = false, foreignKey=@ForeignKey(name = "salary_employee_fk"))
    private Employee employee;

    public Salary(Date create_date, String title, String comment, Float amount) {
        this.create_date = create_date;
        this.title = title;
        this.comment = comment;
        this.amount = amount;
    }
}