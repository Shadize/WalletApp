package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.builder.DocumentBuilder;
import ipeps.pwd.wallet.entity.payload.DocumentCreatePayload;
import ipeps.pwd.wallet.entity.payload.DocumentUpdatePayload;
import ipeps.pwd.wallet.repository.DocumentRepository;
import ipeps.pwd.wallet.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    DocumentRepository documentRepository;

    @Override
    public List<Document> list() {
        return documentRepository.findAll();
    }

    @Override
    public Document detail(UUID documentId) {
        return documentRepository.findById(documentId).orElse(null);
    }

    @Override
    public Document create(DocumentCreatePayload payload) {
        try{
            Document document = new DocumentBuilder()
                    .setTitle(payload.getTitle())
                    .setPath(payload.getPath())
                    .setContent(payload.getContent())
                    .setType(payload.getType())
                    .setCreateDate(payload.getCreateDate())
                    .build();
            return this.documentRepository.save(document);
        }catch(Exception e){
            return null;
        }
    }

    @Override
    public Document update(DocumentUpdatePayload payload) {
        Document detail = this.detail(payload.getDocumentId());
        if(detail != null){
            detail.setTitle(payload.getTitle());
            detail.setPath(payload.getPath());
            detail.setContent(payload.getContent());
            detail.setType(payload.getType());
            detail.setCreateDate(payload.getCreateDate());
            return this.documentRepository.save(detail);
        }
        return detail;
    }

    @Override
    public boolean delete(UUID documentId) {
        try {
            Document detail = this.detail(documentId);
            if (detail != null) {
                this.documentRepository.delete(detail);
            }
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}
