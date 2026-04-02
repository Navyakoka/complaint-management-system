package com.navya.complaintsystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import lombok.Data;

import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Data
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String category;

    private String status;

    @CreationTimestamp
    private LocalDateTime createdDate;
}