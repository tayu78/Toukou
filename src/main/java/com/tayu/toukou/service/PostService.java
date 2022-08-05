package com.tayu.toukou.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Criteria;
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

    // public List<Post> findAllPost() {
    //     Query query = new Query();
    //     query.with(Sort.by(Sort.Direction.ASC, "timestamp"));
    //     return mongoTemplate.find(query, Post.class);
    // }
    public ArrayList<Post> findAllPost() {
        return postRepo.findAll();
    }

    // public ArrayList<Post> getfolloingUsersPosts(String userId) {
    //     ArrayList<Post> posts = postRepo.findAll();
    //     posts.removeIf(u -> u.getUserId().equals(userId) || user.getFollowing().contains(u.getUserId()) );
    //     // return users

    // }
    public List<Post> getFolloingUsersPosts(String userId,ArrayList<String> following) {
            // adding signin user's id because timeline suppose to includes singin user's post
               following.add(userId); 
                Query query = new Query();
                query.addCriteria(Criteria.where("userId").in(following));
         return  mongoTemplate.find(query, Post.class);
   

    }


    public Post getPostDetails(String postId) {
        return postRepo.findByPostId(postId);
    }

    public List<Post> getUsersPost(String userId){
        return postRepo.findByUserId(userId);
    }

    // public void sortDate(){
    //     Query query = new Query();
    //     query.with(Sort.by(Sort.Direction.DESC,"timestamp"));
    //    System.out.println(mongoTemplate.find(query,Post.class)); 
    // }
    public void deletePost(String postId) {
         postRepo.deleteByPostId(postId);
    }
}
