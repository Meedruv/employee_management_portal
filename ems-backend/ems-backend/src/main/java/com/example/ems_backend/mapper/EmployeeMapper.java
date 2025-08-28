package com.example.ems_backend.mapper;

import com.example.ems_backend.Dto.EmployeeDto;
import com.example.ems_backend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDTo(Employee employee ){
        return new EmployeeDto(
                employee.getId(),
                employee.getName(),
                employee.getEmail(),
                employee.getPosition(),
                employee.getSalary()
        );
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getName(),
                employeeDto.getEmail(),
                employeeDto.getPosition(),
                employeeDto.getSalary()
        );
    }
}
