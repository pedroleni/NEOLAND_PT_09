import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

// Prueba para verificar que el componente renderiza correctamente
describe("App Component", () => {
  it("renders correctly", () => {
    render(<App />);
    expect(screen.getByText("Task Board")).toBeInTheDocument();
  });

  // Prueba para añadir una nueva tarea
  it("adds a new task", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  // Prueba para eliminar una tarea
  it("deletes a task", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Task to be deleted" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task to be deleted")).not.toBeInTheDocument();
  });

  // Prueba para asegurarse de que no se añaden tareas vacías
  it("does not add empty tasks", () => {
    render(<App />);
    const addButton = screen.getByText("Add Task");

    fireEvent.click(addButton);

    expect(screen.queryByRole("listitem")).toBeNull();
  });
});
