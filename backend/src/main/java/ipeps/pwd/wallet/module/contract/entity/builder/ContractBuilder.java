package ipeps.pwd.wallet.module.contract.entity.builder;

import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.common.model.CreateBuilder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContractBuilder implements CreateBuilder<Contract> {
    String description;
    Date startDate;
    Date endDate;
    Integer nbHoursByWeek;

    public ContractBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public ContractBuilder setStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }

    public ContractBuilder setEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }

    public ContractBuilder setNbHoursByWeek(Integer nbHoursByWeek) {
        this.nbHoursByWeek = nbHoursByWeek;
        return this;
    }

    @Override
    public Contract build() {
        return new Contract(this.description, this.startDate, this.endDate, this.nbHoursByWeek);
    }
}
