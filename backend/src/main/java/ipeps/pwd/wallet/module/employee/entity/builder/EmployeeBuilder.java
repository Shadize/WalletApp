package ipeps.pwd.wallet.module.employee.entity.builder;

import ipeps.pwd.wallet.common.model.CreateBuilder;
import ipeps.pwd.wallet.module.company.entity.Company;
import ipeps.pwd.wallet.module.contract.entity.Contract;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.employee.entity.Employee;
import ipeps.pwd.wallet.module.fleet.entity.Fleet;
import ipeps.pwd.wallet.module.salary.entity.Salary;
import ipeps.pwd.wallet.module.skill.entity.Skill;
import ipeps.pwd.wallet.module.timesheet.entity.Timesheet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeBuilder implements CreateBuilder<Employee> {

    String lastname;
    String firstname;
    Boolean active;
    String deletedBy;
    String address;
    String gender;
    Date birthday;
    String ssin;
    String status;
    Boolean deleted;
    Company company;
    List<Skill> skills;
    List<Timesheet> timesheets;
    List<Document> documents;
    List<Contract> contracts;
    List<Fleet> fleets;
    List<Salary> salaries;

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
    public EmployeeBuilder setDeletedBy(String deletedBy)
    {
        this.deletedBy = deletedBy;
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

    public EmployeeBuilder setCompany(Company company)
    {
        this.company = company;
        return this;
    }

    public EmployeeBuilder setSkills(List<Skill> skills)
    {
        this.skills = skills;
        return this;
    }

    public EmployeeBuilder setTimesheets(List<Timesheet> timesheets) {
        this.timesheets = timesheets;
        return this;
    }

    public EmployeeBuilder setDocuments(List<Document> documents) {
        this.documents = documents;
        return this;
    }

    public EmployeeBuilder setContracts(List<Contract> contracts) {
        this.contracts = contracts;
        return this;
    }

    public EmployeeBuilder setFleets(List<Fleet> fleets) {
        this.fleets = fleets;
        return this;
    }

    public EmployeeBuilder setSalaries(List<Salary> salaries) {
        this.salaries = salaries;
        return this;
    }




    public Employee build(){ return new Employee(this.lastname, this.firstname, this.active, this.deletedBy,
                            this.address, this.gender, this.birthday,this.ssin, this.status, this.deleted,
                            this.contracts,this.company,this.documents,this.fleets,this.salaries, this.skills, this.timesheets);}
}
