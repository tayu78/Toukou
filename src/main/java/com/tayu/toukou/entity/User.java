package com.tayu.toukou.entity;


import java.util.ArrayList;

import javax.persistence.GeneratedValue;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.lang.NonNull;


@Document
public class User {
    
    @Id
    @GeneratedValue
    private String userId;
    
//    @NonNull
    private String name;

    @Indexed(unique = true)
    private String email;
    private String password;
    private String profilePicture;
    private ArrayList<String> follower = new ArrayList<>();
    private ArrayList<String> following = new ArrayList<>();
    private String description;


    
    public User(){}


    public User(String name, String email, String password, String profilePicture, ArrayList<String> follower,
            ArrayList<String> following, String description) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.follower = follower;
        this.following = following;
        this.description = description;
    }


    @Override
    public String toString() {
        return "User [description=" + description + ", email=" + email + ", follower=" + follower + ", following="
                + following + ", name=" + name + ", password=" + password + ", profilePicture=" + profilePicture
                + ", userId=" + userId + "]";
    }


    public String getUserId() {
        return userId;
    }


    public void setUserId(String userId) {
        this.userId = userId;
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


    public ArrayList<String> getFollower() {
        return follower;
    }


    public void setFollower(ArrayList<String> follower) {
        this.follower = follower;
    }


    public ArrayList<String> getFollowing() {
        return following;
    }


    public void setFollowing(ArrayList<String> following) {
        this.following = following;
    }


    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }


    

}
