package com.klef.jfsd.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Product;
import com.klef.jfsd.springboot.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    public String addProduct(Product product) {
        repository.save(product);
        return "Product added successfully";
    }

    @Override
    public Iterable<Product> viewAllProducts() {
        return repository.findAll();
    }

    @Override
    public String updateProduct(Integer id, Product product) {
        if(repository.existsById(id)) {
            product.setId(id); // Make sure the ID of the product is set to the correct value.
            repository.save(product);
            return "Product updated successfully";
        } else {
            return "Product not found";
        }
    }

    @Override
    public String deleteProduct(Integer id) {
        if(repository.existsById(id)) {
            repository.deleteById(id);
            return "Product deleted successfully";
        } else {
            return "Product not found";
        }
    }
}
