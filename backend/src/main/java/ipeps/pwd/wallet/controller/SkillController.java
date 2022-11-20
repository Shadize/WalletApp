package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("skill")
@RestController
public class SkillController {
    @Autowired
    SkillService skillService;

}
