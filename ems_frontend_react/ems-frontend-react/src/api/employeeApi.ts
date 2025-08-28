import axios from 'axios';
import type { Employee } from '../features/employeeTypes';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Your Spring Boot API URL
  headers: { 'Content-Type': 'application/json' },
});

export const getEmployees = () => api.get<Employee[]>('/employees');
export const addEmployee = (data: Employee) => api.post<Employee>('/employees', data);
export const updateEmployee = (id: number, data: Employee) => api.put<Employee>(`/employees/${id}`, data);
export const deleteEmployee = (id: number) => api.delete(`/employees/${id}`);
