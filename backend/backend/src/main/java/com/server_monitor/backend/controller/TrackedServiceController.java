package com.server_monitor.backend.controller;

import com.server_monitor.backend.model.TrackedService;
import com.server_monitor.backend.repository.TrackedServiceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:5173") // Permission for frontend to access this API
public class TrackedServiceController {

    // Bring the repository to interact with the database
    private final TrackedServiceRepository repository;

    public TrackedServiceController(TrackedServiceRepository repository) {
        this.repository = repository;
    }

    // This method will be called when someone accesses GET /api/services
    @GetMapping
    public List<TrackedService> getAllServices() {
        return repository.findAll(); // Magic function from JPA that does "SELECT * FROM services"
    }
}