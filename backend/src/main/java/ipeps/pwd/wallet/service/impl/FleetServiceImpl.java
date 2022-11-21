package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Fleet;
import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.entity.builder.FleetBuilder;
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
        return fleetRepository.findAll();
    }

    @Override
    public Fleet detail(UUID fleetId) {
        return fleetRepository.findById(fleetId).orElse(null);
    }

    @Override
    public Fleet create(FleetCreatePayload payload) {
        try
        {
            Fleet fleet = new FleetBuilder()
                    .setTitle(payload.getTitle())
                    .setDescription(payload.getDescription())
                    .setCost(payload.getCost())
                    .setType(payload.getType())
                    .build();
            return this.fleetRepository.save(fleet);
        }
        catch (Exception e)
        {
            return null;
        }
    }

    @Override
    public Fleet update(FleetUpdatePayload payload)
    {
        Fleet detail = this.detail(payload.getFleet_id());
        if (detail != null)
        {
            detail.setTitle(payload.getTitle());
            detail.setDescription(payload.getDescription());
            detail.setCost(payload.getCost());
            detail.setType(payload.getType());
            return this.fleetRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID fleetId) {
        try {
            Fleet detail = this.detail(fleetId);
            if (detail != null) {
                this.fleetRepository.delete(detail);
            }
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}
