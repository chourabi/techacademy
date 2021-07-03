package com.example.technologia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.technologia.repository.DepartmentRepository;

@Service
public class DepartmentService {

	
	@Autowired
	DepartmentRepository departmentRepository;

	public DepartmentRepository getDepartmentRepository() {
		return departmentRepository;
	}

	public void setDepartmentRepository(DepartmentRepository departmentRepository) {
		this.departmentRepository = departmentRepository;
	}
	
	
	
	
	
}
