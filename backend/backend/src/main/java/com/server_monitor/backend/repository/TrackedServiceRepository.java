package com.server_monitor.backend.repository;

import com.server_monitor.backend.model.TrackedService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrackedServiceRepository extends JpaRepository<TrackedService, Long> {
}