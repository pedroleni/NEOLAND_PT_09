import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Footer, { socialLogos } from "./Footer";

/**
 * @vitest-environment jsdom
 * Comentario especial para Vitest que especifica que el entorno de prueba será jsdom, simulando un navegador en Node.js.
 */

describe("Footer en nuestro segundo unit testing", () => {
  test("Debería renderizar el componente Footer y sus elementos", () => {
    render(<Footer />);
    expect(
      screen.getByText("Created with love by @RiveraMerida")
    ).toBeInTheDocument();
  });
  test("Debiese renderizar los logos de las redes sociales", () => {
    render(<Footer />);
    socialLogos.forEach((logo) => {
      const imageElement = screen.getByAltText(`logo ${logo.alt}`);
      expect(imageElement).toBeInTheDocument();
    });
  });
});
