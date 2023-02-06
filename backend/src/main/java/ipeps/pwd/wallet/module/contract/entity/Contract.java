package ipeps.pwd.wallet.module.contract.entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
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
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "contract_id", updatable = false, nullable = false)
    UUID contractId;
    String description;
    Date startDate;
    Date endDate;
    Integer nbHoursByWeek;
    @JsonIgnoreProperties({"contract", "company", "contract", "employee"})
    @OneToMany()
    @JoinTable(
            name = "contract_document",
            joinColumns = @JoinColumn(name = "contract_id"),
            inverseJoinColumns = @JoinColumn(name = "document_id"))
    List<Document> documents;

    @JsonIgnoreProperties({"contract", "employee"})
    @OneToMany()
    @JoinTable(
            name = "contract_timesheet",
            joinColumns = @JoinColumn(name = "contract_id"),
            inverseJoinColumns = @JoinColumn(name = "timesheet_id"))
    List<Timesheet> timesheets;

    @JsonIgnoreProperties({"contracts", "employees", "organizations", "documents", "contractsBusiness", "contractsClient"})
    @ManyToOne()
    @JoinTable(
            name = "contractbusiness_company",
            joinColumns = @JoinColumn(name = "contract_id"),
            inverseJoinColumns = @JoinColumn(name = "company_id"))
    Company companyBusiness;

    @JsonIgnoreProperties({"contracts", "employees", "organizations", "documents", "contractsBusiness", "contractsClient"})
    @ManyToOne()
    @JoinTable(
            name = "contractclient_company",
            joinColumns = @JoinColumn(name = "contract_id"),
            inverseJoinColumns = @JoinColumn(name = "company_id"))
    Company companyClient;

    @JsonIgnoreProperties({"skills","company","timesheets","documents","contracts","fleets","salaries"})
    @ManyToOne()
    @JoinTable(
            name = "employee_contract",
            joinColumns = @JoinColumn(name = "contract_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id"))
    Employee employee;



    //    @ManyToMany()
//    @JoinTable(
//            name = "ContractsBetweenCompany",
//            joinColumns = @JoinColumn(name = "contract_id"),
//            inverseJoinColumns = @JoinColumn(name = "company_id"))
//    List<Company> companies;


    public Contract(String description, Date startDate, Date endDate, Integer nbHoursByWeek,
                    List<Document> documents, List<Timesheet> timesheets, Employee employee,
                    Company companyBusiness, Company companyClient) {
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.nbHoursByWeek = nbHoursByWeek;
        this.documents = documents;
        this.timesheets = timesheets;
        this.employee = employee;
        this.companyBusiness = companyBusiness;
        this.companyClient = companyClient;
    }

}
