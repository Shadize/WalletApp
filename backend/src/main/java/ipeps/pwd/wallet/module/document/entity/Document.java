package ipeps.pwd.wallet.module.document.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.GenericGenerator;


import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Document {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "document_id", updatable = false, nullable = false)
    UUID documentId;
    String title;
    String path;
    String content;
    String type;
    Date createDate;
    @JsonIgnoreProperties({"documents", "employees", "organizations", "contractsBusiness", "contractsClient"})
    @ManyToOne()
    // @JoinColumn(name = "company_FK",referencedColumnName = "company_id",nullable = true, foreignKey=@ForeignKey(name = "document_company_fk"))
    @JoinTable(
            name = "document_company",
            joinColumns = @JoinColumn(name = "document_id"),
            inverseJoinColumns = @JoinColumn(name = "company_id"))
    private Company company;

    @JsonIgnoreProperties({"documents", "timesheets", "companyBusiness", "companyClient", "employee"})
    @ManyToOne()
    // @JoinColumn(name = "contract_FK",referencedColumnName = "contract_id",nullable = true, foreignKey=@ForeignKey(name = "document_contract_fk"))
    @JoinTable(
            name = "contract_document",
            joinColumns = @JoinColumn(name = "document_id"),
            inverseJoinColumns = @JoinColumn(name = "contract_id"))
    private Contract contract;

    @JsonIgnoreProperties({"skills","company","timesheets","documents","contracts","fleets","salaries"})
    @ManyToOne()
    @JoinTable(
            name = "employee_document",
            joinColumns = @JoinColumn(name = "document_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id"))
    private Employee employee;

    public Document(String title, String path, String content, String type, Date createDate, Company company, Contract contract, Employee employee) {
        this.title = title;
        this.path = path;
        this.content = content;
        this.type = type;
        this.createDate = createDate;
        this.company = company;
        this.contract = contract;
        this.employee = employee;
    }
}

