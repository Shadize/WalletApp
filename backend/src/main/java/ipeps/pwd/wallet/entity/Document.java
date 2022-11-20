package ipeps.pwd.wallet.entity;

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
    UUID document_id;

    String title;
    String path;
    String content;
    String type;
    Date created_date;

    @ManyToOne()
    @JoinColumn(name = "company_FK",referencedColumnName = "company_id",nullable = false, foreignKey=@ForeignKey(name = "document_company_fk"))
    private Company company;

    @ManyToOne()
    @JoinColumn(name = "contract_FK",referencedColumnName = "contract_id",nullable = false, foreignKey=@ForeignKey(name = "document_contract_fk"))
    private Contract contract;

    @ManyToOne()
    @JoinColumn(name = "employee_FK",referencedColumnName = "employee_id",nullable = false, foreignKey=@ForeignKey(name = "document_employee_fk"))
    private Employee employee;

    public Document(String title, String path, String content, String type, Date created_date) {
        this.title = title;
        this.path = path;
        this.content = content;
        this.type = type;
        this.created_date = created_date;
    }
}
