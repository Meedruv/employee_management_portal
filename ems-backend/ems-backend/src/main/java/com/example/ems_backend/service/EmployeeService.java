package com.example.ems_backend.service;
import com.example.ems_backend.Dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployee(long employeeId);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(long employeeId, EmployeeDto updatedEmployee);
    void deleteEmployee(long employeeId);
}
