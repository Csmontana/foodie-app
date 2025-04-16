package com.foodieapp.backend.service;

import com.foodieapp.backend.model.User;
import com.foodieapp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 🔹 Fetch all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 🔹 Create new user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // 🔹 Get user by ID
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // 🔹 Update existing user
    public User updateUser(Long id, User updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setFirstName(updatedUser.getFirstName());
            user.setLastName(updatedUser.getLastName());
            user.setEmail(updatedUser.getEmail());
            user.setPhone(updatedUser.getPhone());
            user.setAddress(updatedUser.getAddress());
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found with ID: " + id));
    }

    // 🔹 Delete user by ID
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("Cannot delete. User not found with ID: " + id);
        }
        userRepository.deleteById(id);
    }
}
