package ipeps.pwd.wallet.common.model;

import ipeps.pwd.wallet.common.entity.ApiResponse;

import java.util.UUID;

public interface CrudService<ID,CREATE,UPDATE> {
    ApiResponse list();

    ApiResponse detail(ID id);

    ApiResponse create(CREATE payload);

    ApiResponse update(UPDATE payload);

    ApiResponse delete(UUID id);
}
