package ipeps.pwd.wallet.module.fleet.controller;

import ipeps.pwd.wallet.module.fleet.service.FleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("fleet")
public class FleetController {
    @Autowired
    FleetService fleetService;

}
