import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { fetchEmployees, createEmployee, editEmployee, removeEmployee } from '../features/employeeSlice';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeList from '../components/EmployeeList';
import type { Employee } from '../features/employeeTypes';

const EmployeePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { employees, loading } = useSelector((state: RootState) => state.employee);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { dispatch(fetchEmployees()); }, [dispatch]);

  const handleSubmit = (data: Employee) => {
    if (editingEmployee) {
      dispatch(editEmployee({ id: editingEmployee.id!, employee: data }));
      setEditingEmployee(null);
    } else {
      dispatch(createEmployee(data));
    }
    setShowForm(false);
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    dispatch(removeEmployee(id));
  };

  return (
    <div>
      <h1>Employee Management Portal</h1>
      {!showForm && <button onClick={() => { setShowForm(true); setEditingEmployee(null); }}>Add Employee</button>}
      {showForm && <EmployeeForm onSubmit={handleSubmit} defaultValues={editingEmployee || undefined} onCancel={() => setShowForm(false)} />}
      {loading ? <p>Loading...</p> : <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default EmployeePage;
