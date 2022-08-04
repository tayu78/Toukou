package com.tayu.toukou.service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.tayu.toukou.entity.Post;
import com.tayu.toukou.repo.PostRepo;

@Service
public class PostService {

    @Autowired
    PostRepo postRepo;

    @Autowired
    MongoTemplate mongoTemplate;

    public Post saveDataToDB(Post post) {
        return postRepo.save(post);
    }

    public List<Post> findAllPost() {
        Query query = new Query();
        query.with(Sort.by(Sort.Direction.ASC, "timestamp"));
        return mongoTemplate.find(query, Post.class);
    }
    // public ArrayList<Post> findAllPost() {
    //     return postRepo.findAll();
    // }

    public Post getPostDetails(String postId) {
        return postRepo.findByPostId(postId);
    }

    // public void sortDate(){
    //     Query query = new Query();
    //     query.with(Sort.by(Sort.Direction.DESC,"created_at"));
    //    System.out.println(mongoTemplate.find(query,Post.class)); 
    // }
    public void deletePost(String postId) {
         postRepo.deleteByPostId(postId);
    }
}
