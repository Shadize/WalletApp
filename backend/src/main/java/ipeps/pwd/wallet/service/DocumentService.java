package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.payload.DocumentCreatePayload;
import ipeps.pwd.wallet.entity.payload.DocumentUpdatePayload;

import java.util.List;
import java.util.UUID;

public interface DocumentService {
    public List<Document> list();

    public Document detail(UUID documentId);

    public Document create(DocumentCreatePayload payload);

    public Document update(DocumentUpdatePayload payload);

    public boolean delete(UUID documentId);
}
