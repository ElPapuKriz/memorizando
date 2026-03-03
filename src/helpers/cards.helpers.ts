import type { CardData } from "../types/cards.types";

// Cada palabra genera dos cartas con el mismo pairId para identificar el par
export function createDeck(words:string[]): CardData[] {
    const cards = words.flatMap((word: string, wordIndex: number) => [
        { id: wordIndex * 2, word, pairId: wordIndex },
        { id: wordIndex * 2 + 1, word, pairId: wordIndex },
    ]);

    // Mezcla de las cartas
    for (let i = cards.length - 1; i > 0; i--) {
        const j= Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    console.log(cards)
    return cards;
}