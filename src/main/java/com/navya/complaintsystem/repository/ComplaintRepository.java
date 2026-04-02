package com.navya.complaintsystem.repository;

import com.navya.complaintsystem.entity.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
}