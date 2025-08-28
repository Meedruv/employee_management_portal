import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Employee } from './employeeTypes';
import * as api from '../api/employeeApi';

interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = { employees: [], loading: false, error: null };

// Async Thunks
export const fetchEmployees = createAsyncThunk('employee/fetchEmployees', async () => {
  const res = await api.getEmployees();
  return res.data;
});

export const createEmployee = createAsyncThunk('employee/createEmployee', async (employee: Employee) => {
  const res = await api.addEmployee(employee);
  return res.data;
});

export const editEmployee = createAsyncThunk('employee/editEmployee', async ({id, employee}: {id:number, employee: Employee}) => {
  const res = await api.updateEmployee(id, employee);
  return res.data;
});

export const removeEmployee = createAsyncThunk('employee/removeEmployee', async (id: number) => {
  await api.deleteEmployee(id);
  return id;
});

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, state => { state.loading = true; })
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, state => { state.loading = false; state.error = 'Failed to fetch'; })
      
      .addCase(createEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
        state.employees.push(action.payload);
      })
      .addCase(editEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
        const index = state.employees.findIndex(emp => emp.id === action.payload.id);
        if(index !== -1) state.employees[index] = action.payload;
      })
      .addCase(removeEmployee.fulfilled, (state, action: PayloadAction<number>) => {
        state.employees = state.employees.filter(emp => emp.id !== action.payload);
      });
  }
});

export default employeeSlice.reducer;
