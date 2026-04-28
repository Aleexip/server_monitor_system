package com.server_monitor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "services")
public class TrackedService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name; // Ex: "Netflix", "Instagram"

    @Column(nullable = false)
    private String status = "ONLINE"; // Default status

    private int failureCount = 0; // Number of consecutive failures

    // Empty constructor for JPA
    public TrackedService() {
    }

    // Getteri și Setteri
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getFailureCount() {
        return failureCount;
    }

    public void setFailureCount(int failureCount) {
        this.failureCount = failureCount;
    }
}