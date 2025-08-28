import { render, screen, fireEvent } from "@testing-library/react";
import EmployeeForm from "./EmployeeForm";

describe("EmployeeForm Component", () => {
  test("renders input fields and button", () => {
    render(<EmployeeForm onSubmit={() => {}} />);

    // check if inputs exist
    expect(screen.getByPlaceholderText("Employee Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Role")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Salary")).toBeInTheDocument();

    // check if button exists
    expect(screen.getByText("Add Employee")).toBeInTheDocument();
  });

  test("submits form with entered values", () => {
    const mockSubmit = jest.fn(); // mock function
    render(<EmployeeForm onSubmit={mockSubmit} />);

    // enter values
    fireEvent.change(screen.getByPlaceholderText("Employee Name"), {
      target: { value: "Test Name" }
    });
    fireEvent.change(screen.getByPlaceholderText("Position"), {
      target: { value: "Test Role" }
    });
    fireEvent.change(screen.getByPlaceholderText("Salary"), {
      target: { value: "60000" }
    });

    // click submit
    fireEvent.click(screen.getByText("Add Employee"));

    // expect mockSubmit called with form data
    expect(mockSubmit).toHaveBeenCalledWith({
      name: "Test Name",
      role: "Test Role",
      salary: "60000"
    });

    // expect form to reset after submit
    expect(screen.getByPlaceholderText("Employee Name").value).toBe("");
    expect(screen.getByPlaceholderText("Role").value).toBe("");
    expect(screen.getByPlaceholderText("Salary").value).toBe("");
  });
});
