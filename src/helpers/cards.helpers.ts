
import type { CardData } from "../types/cards.types";

// Cada palabra genera dos cartas con el mismo pairId para identificar el par
export function createDeck(IMAGES:string[]): CardData[] {
    const cards = IMAGES.flatMap((image, index) => [
    {
        id: index * 2,
        pairId: index,
        image,
    },
    {
        id: index * 2 + 1,
        pairId: index,
        image,
    }
]);

    // Mezcla de las cartas
    for (let i = cards.length - 1; i > 0; i--) {
        const j= Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    console.log(cards)
    return cards;
}