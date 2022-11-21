package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.service.FleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("fleet")
public class FleetController {
    @Autowired
    FleetService fleetService;

}
