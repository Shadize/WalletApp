package ipeps.pwd.wallet.module.contract.entity;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.company.entity.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Contract {

    public Contract(String description, Date startDate, Date endDate, Integer nbHoursByWeek) {
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.nbHoursByWeek = nbHoursByWeek;
    }

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "contract_id", updatable = false, nullable = false)
    UUID contractId;


    String description;
    Date startDate;
    Date endDate;
    Integer nbHoursByWeek;

    @ManyToMany()
    @JoinTable(
            name = "ContractsBetweenCompany",
            joinColumns = @JoinColumn(name = "contract_id"),
            inverseJoinColumns = @JoinColumn(name = "company_id"))
    List<Company> companies;

//    @ManyToOne()
//    @JoinColumn(name = "company_FK",referencedColumnName = "company_id", nullable = true, foreignKey=@ForeignKey(name = "contract_company_fk"))
//    Company company;
//
//    @ManyToOne()
//    @JoinColumn(name = "client_FK",referencedColumnName = "company_id", nullable = true, foreignKey=@ForeignKey(name = "contract_client_fk"))
//    Company client;

    @ManyToOne()
    @JoinColumn(name = "employee_FK",referencedColumnName = "employee_id",nullable = true, foreignKey=@ForeignKey(name = "contract_employee_fk"))
    private Employee employee;

}
