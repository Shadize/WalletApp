package ipeps.pwd.wallet.module.fleet.service;

import ipeps.pwd.wallet.module.fleet.entity.Fleet;
import ipeps.pwd.wallet.module.fleet.entity.payload.FleetCreatePayload;
import ipeps.pwd.wallet.module.fleet.entity.payload.FleetUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface FleetService {
    public List<Fleet> list();

    public Fleet detail(UUID FleetId);

    public Fleet create(FleetCreatePayload payload);

    public Fleet update(FleetUpdatePayload payload);

    public boolean delete(UUID FleetId);
}
