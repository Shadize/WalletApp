package ipeps.pwd.wallet.module.fleet.entity.builder;

import ipeps.pwd.wallet.common.model.CreateBuilder;
import ipeps.pwd.wallet.module.fleet.entity.Fleet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FleetBuilder implements CreateBuilder<Fleet> {

    String title;
    String description;
    String type;
    Float cost;

    public FleetBuilder setTitle(String title)
    {
        this.title = title;
        return this;
    }
    public FleetBuilder setDescription(String description)
    {
        this.description = description;
        return this;
    }
    public FleetBuilder setType(String type)
    {
        this.type = type;
        return this;
    }
    public FleetBuilder setCost(Float cost)
    {
        this.cost = cost;
        return this;
    }



    @Override
    public Fleet build() {return new Fleet(this.title, this.description, this.type, this.cost);}

}
