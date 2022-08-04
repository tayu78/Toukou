package com.tayu.toukou.repo;


import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.tayu.toukou.entity.Post;

@Repository
public interface PostRepo extends MongoRepository<Post, String> {
    
    Post save(Post post);

    ArrayList<Post> findAll();

    Post findByPostId(String postId);

    List<Post> findByUserId(String userId);

    void deleteByPostId(String postId);


}
