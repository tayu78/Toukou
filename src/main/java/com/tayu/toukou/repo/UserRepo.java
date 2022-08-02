package com.tayu.toukou.repo;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tayu.toukou.entity.User;

@Repository
public interface UserRepo extends MongoRepository<User,String> {
    User save(User user);

    ArrayList<User> findAll();

    User findByUserId(String userId);
}
