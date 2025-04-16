package com.foodieapp.backend;

import com.foodieapp.backend.model.Restaurant;
import com.foodieapp.backend.repository.RestaurantRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(RestaurantRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Restaurant(
                        "Pizza Margherita",
                        "", // No image
                        "Classic pizza with tomato, mozzarella, and basil",
                        "Italian",
                        12.99,
                        "Luigi’s Pizzeria"
                ));

                repository.save(new Restaurant(
                        "Sushi Platter",
                        "", // No image
                        "Assorted sushi rolls with wasabi and soy sauce",
                        "Japanese",
                        18.50,
                        "Tokyo Garden"
                ));

                repository.save(new Restaurant(
                        "Pasta Carbonara",
                        "", // No image
                        "Spaghetti in creamy sauce with pancetta and parmesan",
                        "Italian",
                        14.75,
                        "Casa Roma"
                ));
            }
        };
    }
}
