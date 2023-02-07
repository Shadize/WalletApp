package ipeps.pwd.wallet.security.config;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.web.bind.annotation.RestController;

@EnableResourceServer
@RestController
public class RessourceServerConfiguration extends ResourceServerConfigurerAdapter {
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable();

        http.authorizeRequests().antMatchers("/login","/oauth/token", "/account/signup", "/account/signin","/account/refresh").permitAll();

//        http.authorizeRequests().antMatchers(
//                //Account
//                "/login","/oauth/token", "/account/signup", "/account/signin","/account/refresh",
//                // Salary
//                "/salary/list","/salary/create", "/salary/update", "/salary/detail/{id}", "/salary/delete/{id}",
//                // Employee
//                "/employee/list","/employee/create", "/employee/update", "/employee/detail/{id}", "/employee/delete/{id}",
//                // Skill
//                "/skill/create", "/skill/list", "/skill/update", "/skill/detail/{id}", "/skill/delete/{id}",
//                // Company
//                "/company/create","/company/list","/company/update","/company/detail/{id}", "/company/delete/{id}",
//                // Organization
//                "/organization/list","/organization/create", "/organization/update", "/organization/detail/{id}", "/organization/delete/{id}",
//                // Document
//                "/document/list","/document/create", "/document/update", "/document/detail/{id}", "/document/delete/{id}",
//                // Timesheet
//                "/timesheet/list","/timesheet/create", "/timesheet/update", "/timesheet/detail/{id}", "/timesheet/delete/{id}",
//                // Fleet
//                "/fleet/list","/fleet/create", "/fleet/update", "/fleet/detail/{id}", "/fleet/delete/{id}",
//                // Contract
//                "/contract/list","/contract/create", "/contract/update", "/contract/detail/{id}", "/contract/delete/{id}").permitAll();

        http.authorizeRequests().anyRequest().authenticated();
    }
}
