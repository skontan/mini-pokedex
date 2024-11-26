import { EvolutionDetail } from "../hooks/usePokemonWithEvolution";

export const renderEvolutionRequirements = (
  details: EvolutionDetail[]
): string =>
  details
    .map((detail) => {
      if (detail.min_level) {
        return `Level ${detail.min_level}`;
      }
      if (detail.item) {
        return `Use ${detail.item.name}`;
      }
      if (detail.trigger?.name === "trade") {
        return "Trade required";
      }
      if (detail.min_happiness) {
        return `Happiness ${detail.min_happiness}`;
      }
      if (detail.min_affection) {
        return `Affection ${detail.min_affection}`;
      }
      if (detail.min_beauty) {
        return `Beauty ${detail.min_beauty}`;
      }
      if (detail.known_move) {
        return `Knows ${detail.known_move.name}`;
      }
      if (detail.known_move_type) {
        return `Knows ${detail.known_move_type.name}-type move`;
      }
      if (detail.held_item) {
        return `Hold ${detail.held_item.name}`;
      }
      if (detail.location) {
        return `At ${detail.location.name}`;
      }
      if (detail.needs_overworld_rain) {
        return "Overworld rain required";
      }
      if (detail.party_species) {
        return `Party includes ${detail.party_species.name}`;
      }
      if (detail.party_type) {
        return `Party includes a ${detail.party_type.name}-type Pokémon`;
      }
      if (detail.relative_physical_stats === 1) {
        return "Attack > Defense";
      } else if (detail.relative_physical_stats === 0) {
        return "Attack = Defense";
      } else if (detail.relative_physical_stats === -1) {
        return "Attack < Defense";
      }
      if (detail.time_of_day && detail.time_of_day !== "") {
        return `Time: ${detail.time_of_day}`;
      }
      if (detail.trade_species) {
        return `Trade for ${detail.trade_species.name}`;
      }
      if (detail.turn_upside_down) {
        return "Turn 3DS upside-down";
      }
    })
    .filter(Boolean)
    .join(", ");
