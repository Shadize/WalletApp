package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.service.EmployeeService;
import ipeps.pwd.wallet.service.impl.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;


}
