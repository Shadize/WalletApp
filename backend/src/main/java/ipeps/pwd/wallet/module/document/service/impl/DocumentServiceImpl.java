package ipeps.pwd.wallet.module.document.service.impl;

import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.document.entity.builder.DocumentBuilder;
import ipeps.pwd.wallet.module.document.entity.payload.DocumentCreatePayload;
import ipeps.pwd.wallet.module.document.entity.payload.DocumentUpdatePayload;
import ipeps.pwd.wallet.module.document.repository.DocumentRepository;
import ipeps.pwd.wallet.module.document.service.DocumentService;
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
            DocumentBuilder builder = new DocumentBuilder()
                    .setTitle(payload.getTitle())
                    .setPath(payload.getPath())
                    .setContent(payload.getContent())
                    .setType(payload.getType())
                    .setCreateDate(payload.getCreateDate());

                    if(payload.getCompany() != null)
                        builder.setCompany(payload.getCompany());
                    if(payload.getContract() != null)
                        builder.setContract(payload.getContract());
                    if(payload.getEmployee() != null)
                        builder.setEmployee(payload.getEmployee());
            Document document = this.documentRepository.save(builder.build());
            return document;
        }catch(Exception e){
            throw new RuntimeException(e.getMessage());
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
            detail.setCompany(payload.getCompany());
            detail.setContract(payload.getContract());
            detail.setEmployee(payload.getEmployee());

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
