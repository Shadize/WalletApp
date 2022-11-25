package ipeps.pwd.wallet.module.document.entity.builder;

import ipeps.pwd.wallet.common.model.CreateBuilder;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DocumentBuilder implements CreateBuilder {
    String title;
    String path;
    String content;
    String type;
    Date createDate;
    Company company;
    Contract contract;
    Employee employee;


    public DocumentBuilder setTitle(String title) {
        this.title = title;
        return this;
    }

    public DocumentBuilder setPath(String path) {
        this.path = path;
        return this;
    }

    public DocumentBuilder setContent(String content) {
        this.content = content;
        return this;
    }

    public DocumentBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public DocumentBuilder setCreateDate(Date createdDate) {
        this.createDate = createdDate;
        return this;
    }

    public DocumentBuilder setContract(Contract contract) {
        this.contract = contract;
        return this;
    }

    public DocumentBuilder setCompany(Company company) {
        this.company = company;
        return this;
    }

    public DocumentBuilder setEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }


    @Override
    public Document build() {
        return new Document(this.title, this.path, this.content, this.type, this.createDate, this.company, this.contract, this.employee);
    }
}
