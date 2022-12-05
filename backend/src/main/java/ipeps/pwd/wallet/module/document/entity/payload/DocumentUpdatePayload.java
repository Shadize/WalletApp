package ipeps.pwd.wallet.module.document.entity.payload.entity.payload;

import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DocumentUpdatePayload {
    UUID documentId;
    String title;
    String path;
    String content;
    String type;
    Date createDate;
    Company company;
    Contract contract;
    Employee employee;
}
