package org.factoriaf5.backend.persistence;
import jakarta.persistence.Id;

public class Product {
    @Id
    private int Id;
    private String name;
    private String description;
    private double price;
    private String img ;
    
}
