package com.tayu.toukou.entity;

import java.math.BigInteger;
import java.util.ArrayList;

import javax.persistence.GeneratedValue;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class User {
    
    @Id
    @GeneratedValue
    private BigInteger userId;
    
    private String name;
    private String email;
    private String password;
    private String profilePicture;
    private ArrayList<Integer> follower;
    private ArrayList<Integer> following;
    private String description;


    
    public User(){}


    public User(String name, String email, String password, String profilePicture, ArrayList<Integer> follower,
            ArrayList<Integer> following, String description) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.follower = follower;
        this.following = following;
        this.description = description;
    }


    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getProfilePicture() {
        return profilePicture;
    }
    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }
    public ArrayList<Integer> getFollower() {
        return follower;
    }
    public void setFollower(ArrayList<Integer> follower) {
        this.follower = follower;
    }
    public ArrayList<Integer> getFollowing() {
        return following;
    }
    public void setFollowing(ArrayList<Integer> following) {
        this.following = following;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    } 

}
