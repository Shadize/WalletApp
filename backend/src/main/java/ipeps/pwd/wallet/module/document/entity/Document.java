package ipeps.pwd.wallet.module.document.entity;

import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
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

    @ManyToOne()
    @JoinColumn(name = "company_FK",referencedColumnName = "company_id",nullable = true, foreignKey=@ForeignKey(name = "document_company_fk"))
    private Company company;

    @ManyToOne()
    @JoinColumn(name = "contract_FK",referencedColumnName = "contract_id",nullable = true, foreignKey=@ForeignKey(name = "document_contract_fk"))
    private Contract contract;

    @ManyToOne()
    @JoinColumn(name = "employee_FK",referencedColumnName = "employee_id",nullable = true, foreignKey=@ForeignKey(name = "document_employee_fk"))
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
