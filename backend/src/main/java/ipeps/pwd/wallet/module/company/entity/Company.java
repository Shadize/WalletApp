package ipeps.pwd.wallet.module.company.entity;

import ipeps.pwd.wallet.module.contract.entity.Contract;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Company {

    public Company(String name, String description, String address, boolean isManaged, boolean isActive, boolean isDeleted, String deletedBy) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.isManaged = isManaged;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
        this.deletedBy = deletedBy;
    }

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "company_id", updatable = false, nullable = false)
    UUID companyId;

    String name;
    String description;
    String address;
    boolean isManaged;
    boolean isActive;
    boolean isDeleted;
    String deletedBy;

    @ManyToMany(mappedBy = "companies")
    List<Contract> contracts;

}
