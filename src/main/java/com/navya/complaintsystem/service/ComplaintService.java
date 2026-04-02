package com.navya.complaintsystem.service;

import com.navya.complaintsystem.entity.Complaint;
import com.navya.complaintsystem.repository.ComplaintRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    public Complaint createComplaint(Complaint complaint) {
        return complaintRepository.save(complaint);
    }

    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    public Complaint updateStatus(Long id, Complaint updatedComplaint) {

        Complaint complaint = complaintRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Complaint not found"));

        complaint.setStatus(updatedComplaint.getStatus());

        return complaintRepository.save(complaint);
    }

    public void deleteComplaint(Long id) {
        complaintRepository.deleteById(id);
    }
}