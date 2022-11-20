package ipeps.pwd.wallet.entity.builder;

import ipeps.pwd.wallet.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeBuilder implements CreateBuilder<Employee>{

    String lastname;
    String firstname;
    Boolean active;
    String deleted_by;
    String address;
    String gender;
    Date birthday;
    String ssin;
    String status;
    Boolean deleted;

    public EmployeeBuilder setLastname(String lastname)
    {
        this.lastname = lastname;
        return this;
    }
    public EmployeeBuilder setFirstname(String firstname)
    {
        this.firstname = firstname;
        return this;
    }
    public EmployeeBuilder setActive(Boolean active)
    {
        this.active = active;
        return this;
    }
    public EmployeeBuilder setDeleted_by(String deleted_by)
    {
        this.deleted_by = deleted_by;
        return this;
    }
    public EmployeeBuilder setAddress(String address)
    {
        this.address = address;
        return this;
    }
    public EmployeeBuilder setGender(String gender)
    {
        this.gender = gender;
        return this;
    }
    public EmployeeBuilder setBirthday(Date birthday)
    {
        this.birthday = birthday;
        return this;
    }

    public EmployeeBuilder setSsin(String ssin)
    {
        this.ssin = ssin;
        return this;
    }

    public EmployeeBuilder setStatus(String status)
    {
        this.status = status;
        return this;
    }

    public EmployeeBuilder setDeleted(Boolean deleted)
    {
        this.deleted = deleted;
        return this;
    }


    public Employee build(){ return new Employee(this.lastname, this.firstname, this.active, this.deleted_by,
                            this.address, this.gender, this.birthday,this.ssin, this.status, this.deleted);}
}
