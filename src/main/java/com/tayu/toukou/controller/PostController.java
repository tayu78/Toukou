package com.tayu.toukou.controller;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tayu.toukou.entity.Post;
import com.tayu.toukou.repo.PostRepo;
import com.tayu.toukou.service.PostService;


@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "*")
public class PostController {
    
    @Autowired
    PostService postService;
    
    @PostMapping("/save")
    public Post savaData(@RequestBody Post post) {
        return postService.saveDataToDB(post);
    }
    @GetMapping("/getAllPosts")
    public List<Post> getAllPosts() {
        return postService.findAllPost();
    }

    @GetMapping("/search/{postId}")
    public Post getPostById(@PathVariable String postId) {
        return postService.getPostDetails(postId);
    }
    
    // @GetMapping("/sort")
    // public void sortdate() {
    //     postService.sortDate();
    // }

    @DeleteMapping("/{postId}")
    public ResponseEntity<?> deletePostById(@PathVariable String postId) {
        postService.deletePost(postId);
        return new ResponseEntity<>("successfully deleted", HttpStatus.OK);
    }

}
