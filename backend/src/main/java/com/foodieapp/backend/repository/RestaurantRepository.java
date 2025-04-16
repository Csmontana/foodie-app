// ✅ RestaurantRepository.java
package com.foodieapp.backend.repository;

import com.foodieapp.backend.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    // You can add custom query methods here if needed
}
