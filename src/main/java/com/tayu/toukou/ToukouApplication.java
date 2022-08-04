package com.tayu.toukou;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class ToukouApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToukouApplication.class, args);
	}

}
