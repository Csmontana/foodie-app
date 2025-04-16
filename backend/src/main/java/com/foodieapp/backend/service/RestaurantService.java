package com.foodieapp.backend.service;

import com.foodieapp.backend.model.Restaurant;
import com.foodieapp.backend.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    public Optional<Restaurant> getRestaurantById(Long id) {
        return restaurantRepository.findById(id);
    }

    public Restaurant saveRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Restaurant updateRestaurant(Long id, Restaurant updated) {
        return restaurantRepository.findById(id).map(r -> {
            r.setName(updated.getName());
            r.setImageUrl(updated.getImageUrl());
            r.setDescription(updated.getDescription());
            r.setCuisine(updated.getCuisine());
            r.setPrice(updated.getPrice());
            r.setLocation(updated.getLocation());
            return restaurantRepository.save(r);
        }).orElseThrow(() -> new RuntimeException("Restaurant not found with id " + id));
    }

    public void deleteRestaurant(Long id) {
        restaurantRepository.deleteById(id);
    }
}
