package com.tayu.toukou.controller;


import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tayu.toukou.entity.User;
import com.tayu.toukou.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService userService;
    
    @PostMapping("/save")
    public User savaData(@RequestBody User user) {
        return userService.saveDataToDB(user);
    }

    @GetMapping("/getAllUsers")
    public ArrayList<User> getAllUsers() {
        return userService.findAllUser();
    }

    @GetMapping("/search/{userId}")
    public User getUserById(@PathVariable String userId) {
        return userService.getUserDetails(userId);
    }
}
