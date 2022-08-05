package com.tayu.toukou.controller;


import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping("/getReccomendedUsers/{userId}")
    public ArrayList<User> getReccomendedUsers(@PathVariable String userId) {
        return userService.getReccomendedUsers(userId);
    }

    @GetMapping("/search/{userId}")
    public User getUserById(@PathVariable String userId) {
        return userService.getUserDetails(userId);
    }


    @PostMapping("/signIn")
    public User signIn(@RequestBody User user) {
        return userService.getUserDetails(user.getName(), user.getEmail(), user.getPassword());
    }

    @PutMapping("/updateUserProfile/{userId}")
    public User updateUserProfile(@PathVariable String userId, @RequestBody User updatedUserDetail) {
        System.out.println("user" + updatedUserDetail);
        return userService.updateUserProfile(userId,updatedUserDetail);
    }

    @PutMapping("/{userId}/follow")
    public User follow(@PathVariable String userId, @RequestBody User followingUser) {
        return userService.follow(userId, followingUser);
    }
    
    // @GetMapping("/query")
    // public void useQuery() {
    //     System.out.println("use query: ");
    //    System.out.println(userService.useQuery().get(0).getEmail());
    // }
}
