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

    // @Autowired
    // MongoTemplate mongoTemplate;

    public User saveDataToDB(User user) {
        return userRepo.save(user);
    }

    public ArrayList<User> findAllUser() {
        return userRepo.findAll();
    }

    public User getUserDetails(String userId) {
        return userRepo.findByUserId(userId);
    }

   

    public ArrayList<User> getReccomendedUsers(String userId) {
        User user = userRepo.findByUserId(userId);

        ArrayList<User> users = userRepo.findAll();
        users.removeIf(u -> u.getUserId().equals(userId) || user.getFollowing().contains(u.getUserId()) );
        return users;

    }

    public User getUserDetails(String name, String email, String password) {
        return userRepo.findByNameAndEmailAndPassword(name, email, password);
    }

    // public List<User> useQuery() {
    //             Query query = new Query();
    //             query.addCriteria(Criteria.where("name").is("Yuya"));
    //      return  mongoTemplate.find(query, User.class);
    // }

    public User updateUserProfile(String userId, User updatedUserDetail) {
        User user = userRepo.findByUserId(userId);
        user.setName(updatedUserDetail.getName());
        user.setEmail(updatedUserDetail.getEmail());
        user.setProfilePicture(updatedUserDetail.getProfilePicture());
        user.setDescription(updatedUserDetail.getDescription());
        userRepo.save(user);
        return user;
    }

    public User follow(String userId, User followingUser) {
        User signInuser = userRepo.findByUserId(userId);
        ArrayList<String> following = signInuser.getFollowing();
        following.add(followingUser.getUserId());
        signInuser.setFollowing(following);
        userRepo.save(signInuser);
        
        // add sign in user's Id to following user's  follower as well
        followingUser.getFollower().add(userId);
        userRepo.save(followingUser);
        return signInuser;
    }
}
