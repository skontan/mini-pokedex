import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import App from "../App";

describe("App Integration Test", () => {
  it("allows the user to search, navigate, and view Pokémon details", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<App />);

    // Go to search tab
    const searchTab = getByText("Search");
    fireEvent.press(searchTab);

    // Search for a Pokémon
    const searchInput = getByPlaceholderText("Search Pokémon name");
    fireEvent.changeText(searchInput, "eevee");

    // Wait for search results to appear
    const eeveeResult = await waitFor(() => findByText("eevee"), {
      timeout: 10000,
    });
    expect(eeveeResult).toBeTruthy();

    // Navigate to the Pokémon details screen
    fireEvent.press(eeveeResult);

    // Check stats
    expect(
      await waitFor(() => findByText("special-defense"), {
        timeout: 10000,
      })
    ).toBeTruthy();
    expect(await findByText("65")).toBeTruthy();

    // Check evolutions
    const vaporeonName = await waitFor(() => findByText("vaporeon"), {
      timeout: 10000,
    });
    expect(vaporeonName).toBeTruthy();

    const evolutionRequirement = await waitFor(
      () => findByText("Use water-stone"),
      { timeout: 10000 }
    );
    expect(evolutionRequirement).toBeTruthy();
  }, 30000);
});
