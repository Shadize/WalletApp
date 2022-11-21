package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Salary;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalaryBuilder implements CreateBuilder {
    Date createDate;
    String  title;
    String  comment;
    Float   amount;
    Employee employee;

    public SalaryBuilder setCreatedDate(Date create_date){
        this.createDate = createDate;
        return this;
    }

    public SalaryBuilder setTitle(String title){
        this.title = title;
        return this;
    }

    public SalaryBuilder setComment(String comment){
        this.comment = comment;
        return this;
    }

    public SalaryBuilder setAmount(Float amount){
        this.amount = amount;
        return this;
    }

    public SalaryBuilder setEmployee(Employee employee){
        this.employee = employee;
        return this;
    }

    @Override
    public Salary build() {
        return new Salary(this.createDate, this.title, this.comment, this.amount, this.employee);
    }
}
