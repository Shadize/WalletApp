package ipeps.pwd.wallet.module.document.controller;

import ipeps.pwd.wallet.common.constant.ApiCode;
import ipeps.pwd.wallet.common.entity.ApiResponse;
import ipeps.pwd.wallet.module.document.entity.Document;
import ipeps.pwd.wallet.module.document.entity.payload.entity.payload.DocumentCreatePayload;
import ipeps.pwd.wallet.module.document.entity.payload.entity.payload.DocumentUpdatePayload;
import ipeps.pwd.wallet.module.document.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("document")
public class DocumentController {
    @Autowired
    DocumentService documentService;

    @GetMapping("list")
    public ApiResponse list() {
        try {
            return new ApiResponse(true, this.documentService.list(), ApiCode.DOCUMENT_LIST_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.DOCUMENT_LIST_ERROR);
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse getDetail(@PathVariable("id") UUID document_id) {
        try {
            Document detail = this.documentService.detail(document_id);
            if(detail != null){
                return new ApiResponse(true, detail, ApiCode.DOCUMENT_DETAIL_SUCCESS);
            }
            return new ApiResponse(false, detail, ApiCode.DOCUMENT_DETAIL_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.DOCUMENT_DETAIL_ERROR);
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody() DocumentCreatePayload payload) {
        try {
            return new ApiResponse(true, this.documentService.create(payload), ApiCode.DOCUMENT_CREATE_SUCCESS);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.DOCUMENT_CREATE_ERROR);
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody() DocumentUpdatePayload payload) {
        try {
            Document documentUpdated = this.documentService.update(payload);
            if(documentUpdated != null){
                return new ApiResponse(true, documentUpdated, ApiCode.DOCUMENT_UPDATE_SUCCESS);
            }
            return new ApiResponse(true, this.documentService.update(payload), ApiCode.DOCUMENT_UPDATE_NOT_FOUND);
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), ApiCode.DOCUMENT_UPDATE_ERROR);
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID document_id) {
        if (this.documentService.delete(document_id)) {
            return new ApiResponse(true, "", ApiCode.DOCUMENT_DELETE_SUCCESS);
        }
        return new ApiResponse(false, "", ApiCode.DOCUMENT_DELETE_ERROR);

    }
}
