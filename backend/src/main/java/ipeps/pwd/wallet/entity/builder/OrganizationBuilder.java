package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Company;
import ipeps.pwd.wallet.entity.Organization;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.ast.Or;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationBuilder implements CreateBuilder<Organization> {

    String name;
    String description;

    Company company;

    public OrganizationBuilder setName(String name){
        this.name = name;
        return this;
    }

    public OrganizationBuilder setDescription(String description){
        this.description = description;
        return this;
    }

    public OrganizationBuilder setCompany(Company company){
        this.company = company;
        return this;
    }

    @Override
    public Organization build() {
        return new Organization(this.name, this.description, this.company);
    }
}
