package org.factoriaf5.backend;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.factoriaf5.backend.persistence.Product;
import org.factoriaf5.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/product")
public class ProductResponse {

    @Autowired
    private ProductService productService;

    @GetMapping
    private ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.findAll());
    }

}
