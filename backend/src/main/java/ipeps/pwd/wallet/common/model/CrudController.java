package ipeps.pwd.wallet.common.model;

import ipeps.pwd.wallet.common.entity.ApiResponse;

public interface CrudController<ID, CREATE, UPDATE> {
    ApiResponse list();

    ApiResponse detail(ID id);

    ApiResponse create(CREATE payload);

    ApiResponse update(UPDATE payload);

    ApiResponse delete(ID id);
}
