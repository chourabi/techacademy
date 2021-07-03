package com.example.technologia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.technologia.model.Department;

public interface DepartmentRepository extends JpaRepository<Department,Long> {

}
