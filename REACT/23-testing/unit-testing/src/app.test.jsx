import App from "./App";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

/**
 * @vitest-environment jsdom
 * Comentario especial para Vitest que especifica que el entorno de prueba será jsdom, simulando un navegador en Node.js.
 */

describe("App en nuestro primer unit testing", () => {
  test("Debería renderizar el componente App y sus elementos", () => {
    render(<App />); // Renderizamos el componente App
    expect(screen.getByAltText("giphy")).toBeInTheDocument(); // esperamos que el elemento con el alt giphy esté en el documento
    expect(screen.getByText("Hello,")).toBeInTheDocument(); // esperamos que el elemento con el texto Hello, esté en el documento
    expect(screen.getByPlaceholderText("Type your name!")).toBeInTheDocument(); // esperamos que el elemento con el placeholder Type your name! esté en el documento
  });

  test("Verificar que la imagen se renderiza con el atributo correcto", () => {
    render(<App />); // renderizamos el componente App
    expect(screen.getByRole("img")).toHaveAttribute("alt", "giphy"); // esperamos que el elemento con el rol img tenga el atributo alt con el valor giphy
    expect(screen.getByRole("img")).toHaveAttribute("data-testid", "giphy"); // esperamos que el elemento con el rol img tenga el atributo alt con el valor giphy
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://media.giphy.com/media/CuuSHzuc0O166MRfjt/giphy.gif"
    ); // esperamos que el elemento con el rol img tenga el atributo alt con el valor giphy
  });

  test("Vericamos que el text muestra el nombre correcto cuando lo escribe un usuar", () => {
    render(<App />); // renderizamos el componente App
    const input = screen.getByPlaceholderText("Type your name!"); // obtenemos el input con el placeholder Type your name!
    userEvent.type(input, "Elena"); // simulamos que el usuario escribe John Doe en el input
    waitFor(() => expect(screen.getByText("Hello, Elena")).toBeInTheDocument()); // esperamos que el texto Hello, John Doe esté en el documento
  });
});
