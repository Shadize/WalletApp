package ipeps.pwd.wallet.entity;

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
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "company_id", updatable = false, nullable = false)
    UUID company_id;

    String name;
    String description;
    String address;
    boolean is_managed;
    boolean active;
    boolean deleted;
    String deleted_by;

    @ManyToMany(mappedBy = "companies")
    List<Contract> contracts;
}
