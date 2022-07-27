package com.tayu.toukou.entity;

import java.math.BigInteger;
import java.sql.Date;
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
    private BigInteger postId;

    private BigInteger userId;
    private String description;
    private String img;
    private ArrayList<BigInteger> likes;

    @Temporal(TemporalType.TIMESTAMP) 
    @DateTimeFormat(style = "M-") 
    @CreatedDate
    private Date timestamp;


 
    public Post(){}


    public Post(BigInteger userId, String description, String img, ArrayList<BigInteger> likes,
            Date timestamp) {
        this.userId = userId;
        this.description = description;
        this.img = img;
        this.likes = likes;
        this.timestamp = timestamp;
    }

    public BigInteger getPostId() {
        return postId;
    }

    public void setPostId(BigInteger postId) {
        this.postId = postId;
    }

    public BigInteger getUserId() {
        return userId;
    }

    public void setUserId(BigInteger userId) {
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

    public ArrayList<BigInteger> getLikes() {
        return likes;
    }

    public void setLikes(ArrayList<BigInteger> likes) {
        this.likes = likes;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }





    
    
}
