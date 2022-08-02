package com.tayu.toukou.repo;

import java.math.BigInteger;
import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tayu.toukou.entity.Post;

@Repository
public interface PostRepo extends MongoRepository<Post, BigInteger> {
    
    Post save(Post post);

    ArrayList<Post> findAll();

    Post findByPostId(BigInteger postId);
}