package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.jfsd.springboot.model.Product;
import com.klef.jfsd.springboot.service.ProductService;

@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping("add")
    public String addProduct(@RequestBody Product product) {
        return service.addProduct(product);
    }

    @GetMapping("view")
    public Iterable<Product> viewAllProducts() {
        return service.viewAllProducts();
    }

    @PutMapping("update/{id}")
    public String updateProduct(@PathVariable Integer id, @RequestBody Product product) {
        return service.updateProduct(id, product);
    }

    @DeleteMapping("delete/{id}")
    public String deleteProduct(@PathVariable Integer id) {
        return service.deleteProduct(id);
    }
}
