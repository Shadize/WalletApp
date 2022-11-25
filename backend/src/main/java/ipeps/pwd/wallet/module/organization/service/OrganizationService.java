package ipeps.pwd.wallet.module.organization.service;

import ipeps.pwd.wallet.module.organization.entity.Organization;
import ipeps.pwd.wallet.module.organization.entity.payload.OrganizationCreatePayload;
import ipeps.pwd.wallet.module.organization.entity.payload.OrganizationUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface OrganizationService {
    public List<Organization> list();

    public Organization detail(UUID organizationId);

    public Organization create(OrganizationCreatePayload payload);

    public Organization update(OrganizationUpdatePayload payload);

    public boolean delete(UUID organizationId);
}
