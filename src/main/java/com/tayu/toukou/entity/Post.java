package com.tayu.toukou.entity;


import java.time.LocalDateTime;

import java.util.ArrayList;


import javax.persistence.GeneratedValue;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

@Document
public class Post {
    
    @Id
    @GeneratedValue
    private String postId;

    private String userId;
    private String description;
    private String img;
    private ArrayList<String> likes;

    @Temporal(TemporalType.TIMESTAMP) 
    // @DateTimeFormat(style = "M-") 
    @CreatedDate
    private LocalDateTime timestamp = LocalDateTime.now();


    public Post(){}

    public Post(String userId, String description, String img, ArrayList<String> likes, LocalDateTime timestamp) {
        this.userId = userId;
        this.description = description;
        this.img = img;
        this.likes = likes;
        this.timestamp = timestamp;
    }



    public String getPostId() {
        return postId;
    }



    public void setPostId(String postId) {
        this.postId = postId;
    }



    public String getUserId() {
        return userId;
    }



    public void setUserId(String userId) {
        this.userId = userId;
    }



    public String getDescription() {
        return description;
    }



    public void setDescription(String description) {
        this.description = description;
    }



    public String getImg() {
        return img;
    }



    public void setImg(String img) {
        this.img = img;
    }



    public ArrayList<String> getLikes() {
        return likes;
    }



    public void setLikes(ArrayList<String> likes) {
        this.likes = likes;
    }



    public LocalDateTime getTimestamp() {
        return timestamp;
    }



    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

}
