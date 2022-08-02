package com.tayu.toukou.service;

import java.math.BigInteger;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tayu.toukou.entity.Post;
import com.tayu.toukou.repo.PostRepo;

@Service
public class PostService {

    @Autowired
    PostRepo postRepo;

    public Post saveDataToDB(Post post) {
        return postRepo.save(post);
    }
    
    public ArrayList<Post> findAllPost() {
        return postRepo.findAll();
    }

    public Post getPostDetails(String postId) {
        return postRepo.findByPostId(postId);
    }
}
