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

        // http.authorizeRequests().antMatchers("/login","/oauth/token", "/account/signup", "/account/signin","/account/refresh", "/salary/list","/salary/create", "/salary/update", "/salary/detail/{id}", "/salary/delete/{id}").permitAll();
        http.authorizeRequests().antMatchers("/login","/oauth/token", "/account/signup", "/account/signin","/account/refresh", "/salary/list","/salary/create", "/salary/update", "/salary/detail/{id}", "/salary/delete/{id}",
                                            "/employee/list","/employee/create", "/employee/update", "/employee/detail/{id}", "/employee/delete/{id}",
                                            "/organization/list","/organization/create", "/organization/update", "/organization/detail/{id}", "/organization/delete/{id}").permitAll();

        http.authorizeRequests().anyRequest().authenticated();
    }
}
