package com.tayu.toukou.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.tayu.toukou.entity.User;
import com.tayu.toukou.repo.UserRepo;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    MongoTemplate mongoTemplate;

    public User saveDataToDB(User user) {
        return userRepo.save(user);
    }

    public ArrayList<User> findAllUser() {
        return userRepo.findAll();
    }

    public User getUserDetails(String userId) {
        return userRepo.findByUserId(userId);
    }

    public User getUserDetails(String name, String email, String password) {
        return userRepo.findByNameAndEmailAndPassword(name, email, password);
    }

    // public List<User> useQuery() {
    //             Query query = new Query();
    //             query.addCriteria(Criteria.where("name").is("Yuya"));
    //      return  mongoTemplate.find(query, User.class);
    // }

    public void follow(String userId,User followingUser) {
        User user = userRepo.findByUserId(userId);
        ArrayList<String> following = user.getFollowing();
        String a = followingUser.getUserId();
        String b = followingUser.getName();
        System.out.println("-----------" + a);
        System.out.println("-----------" + b);
        System.out.println("-----------" + followingUser);
        following.add(followingUser.getUserId());
        user.setFollowing(following);
        userRepo.save(user);
    }
}
