package ipeps.pwd.wallet.module.company.entity.builder;

import ipeps.pwd.wallet.common.model.CreateBuilder;
import ipeps.pwd.wallet.module.company.entity.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Override
    public Company build() {
        return new Company(this.name, this.description, this.address, this.isManaged, this.isActive, this.isDeleted, this.deletedBy);
    }
}
