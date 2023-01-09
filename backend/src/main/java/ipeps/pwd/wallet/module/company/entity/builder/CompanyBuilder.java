package ipeps.pwd.wallet.module.company.entity.builder;

import ipeps.pwd.wallet.common.model.CreateBuilder;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.organization.entity.Organization;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyBuilder implements CreateBuilder<Company> {
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

    public CompanyBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public CompanyBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public CompanyBuilder setAddress(String address) {
        this.address = address;
        return this;
    }

    public CompanyBuilder setIsManaged(boolean isManaged) {
        this.isManaged = isManaged;
        return this;
    }

    public CompanyBuilder setActive(boolean isActive) {
        this.isActive = isActive;
        return this;
    }

    public CompanyBuilder setDeleted(boolean isDeleted) {
        this.isDeleted = isDeleted;
        return this;
    }

    public CompanyBuilder setDeletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
        return this;
    }

    public CompanyBuilder setEmployees(List<Employee> employees) {
        this.employees = employees;
        return this;
    }

    public CompanyBuilder setOrganizations(List<Organization> organizations) {
        this.organizations = organizations;
        return this;
    }

    public CompanyBuilder setDocuments(List<Document> documents) {
        this.documents = documents;
        return this;
    }

    public CompanyBuilder setContractsBusiness(List<Contract> contractsBusiness) {
        this.contractsBusiness = contractsBusiness;
        return this;
    }

    public CompanyBuilder setContractsClient(List<Contract> contractsClient) {
        this.contractsClient = contractsClient;
        return this;
    }

    @Override
    public Company build() {
        return new Company (this.name, this.description, this.address, this.isManaged,
                            this.isActive, this.isDeleted, this.deletedBy, this.employees,
                            this.organizations, this.documents, this.contractsClient,
                            this.contractsBusiness);
    }
}
