package ipeps.pwd.wallet.module.employee.entity;

import ipeps.pwd.wallet.module.company.entity.Company;
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
public class Employee {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "employee_id", updatable = false, nullable = false)
    UUID employee_id;

    String lastname;
    String firstname;
    Boolean active;
    String deleted_by;
    String address;
    String gender;
    Date birthday;
    String ssin;
    String status;
    Boolean deleted;

    @ManyToOne()
    @JoinColumn(name = "company_FK",referencedColumnName = "company_id", nullable = false, foreignKey=@ForeignKey(name = "employee_company_fk"))
    private Company company;

    public Employee(String lastname, String firstname, Boolean active, String deleted_by,
                    String address, String gender, Date birthday, String ssin,String status,
                    Boolean deleted, Company company)
    {
        this.lastname = lastname;
        this.firstname = firstname;
        this.active = active;
        this.deleted_by = deleted_by;
        this.address = address;
        this.gender = gender;
        this.birthday = birthday;
        this.ssin = ssin;
        this.status = status;
        this.deleted = deleted;
        this.company = company;
    }
}
