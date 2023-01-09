package ipeps.pwd.wallet.module.company.entity.payload;

import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.organization.entity.Organization;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyCreatePayload {
    String name;
    String description;
    String address;
    boolean isManaged;
    boolean isActive;
    boolean isDeleted;
    String deletedBy;
    List<Employee> employees;
    List<Organization> organizations;
    List<Document> documents;
    List<Contract> contractsBusiness;
    List<Contract> contractsClient;
}
