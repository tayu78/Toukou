package com.tayu.toukou.controller;

import java.math.BigInteger;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tayu.toukou.entity.Post;
import com.tayu.toukou.service.PostService;


@RestController
@RequestMapping("/posts")
public class PostController {
    
    @Autowired
    PostService postService;
    
    @PostMapping("/save")
    public Post savaData(@RequestBody Post post) {
        return postService.saveDataToDB(post);
    }

    @GetMapping("/getAllPosts")
    public ArrayList<Post> getAllPosts() {
        return postService.findAllPost();
    }

    @GetMapping("/search/{postId}")
    public Post getUserById(@PathVariable BigInteger postId) {
        return postService.getPostDetails(postId);
    }
    
}
