package com.tayu.toukou.service;

import java.math.BigInteger;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tayu.toukou.entity.User;
import com.tayu.toukou.repo.UserRepo;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User saveDataToDB(User user) {
        return userRepo.save(user);
    }
    
    public ArrayList<User> findAllUser() {
        return userRepo.findAll();
    }

    public User getUserDetails(BigInteger userId) {
        return userRepo.findByUserId(userId);
    }
}
