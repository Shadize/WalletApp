package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Fleet;
import ipeps.pwd.wallet.entity.payload.FleetCreatePayload;
import ipeps.pwd.wallet.entity.payload.FleetUpdatePayload;
import ipeps.pwd.wallet.repository.FleetRepository;
import ipeps.pwd.wallet.service.FleetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class FleetServiceImpl implements FleetService {
    @Autowired
    FleetRepository fleetRepository;

    @Override
    public List<Fleet> list() {
        return null;
    }

    @Override
    public Fleet detail(UUID FleetId) {
        return null;
    }

    @Override
    public Fleet create(FleetCreatePayload payload) {
        return null;
    }

    @Override
    public Fleet update(FleetUpdatePayload payload) {
        return null;
    }

    @Override
    public boolean delete(UUID FleetId) {
        return false;
    }
}
