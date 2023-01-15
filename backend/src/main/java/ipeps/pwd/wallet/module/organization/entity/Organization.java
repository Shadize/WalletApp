package ipeps.pwd.wallet.module.organization.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ipeps.pwd.wallet.module.company.entity.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Organization {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "organization_id", updatable = false, nullable = false)
    UUID organizationId;

    String name;
    String description;

    @JsonIgnoreProperties({"organizations", "employees","documents","contractsBusiness","contractsClient"
    })
    @ManyToOne()
    @JoinColumn(name = "company_fk", referencedColumnName = "company_id", nullable = false, foreignKey=@ForeignKey(name = "organisation_company_fk"))
    Company company;

    public Organization(String name, String description, Company company){
        this.name = name;
        this.description = description;
        this.company = company;
    }
}
