import { useState } from "react";
import type { CardData } from "../types/cards.types";
import { WORDS } from "../MemoriaMain";
import { createDeck } from "../helpers/cards.helpers";



const useCard = () => {
    const [deck, setDeck] = useState<CardData[]>(() => createDeck(WORDS));
    const [flipped, setFlipped] = useState<number[]>([]);   // índices de cartas volteadas (máx 2)
    const [matched, setMatched] = useState<number[]>([]);   // pairIds ya emparejados
    const [moves, setMoves] = useState<number>(0);      // intentos realizados
    const [locked, setLocked] = useState<boolean>(false); // bloqueo mientras se evalúa el par

    const totalPairs: number = WORDS.length;
    const score: number = matched.length;
    const gameWon: boolean = score === totalPairs;

    // ── Clic en una carta ──────────────────────────────────────────────────────

    function handleCardClick(clickedIndex: number): void {
        if (locked) return;
        if (matched.includes(deck[clickedIndex].pairId)) return;
        if (flipped.includes(clickedIndex)) return;
        if (flipped.length === 2) return;

        const newFlipped: number[] = [...flipped, clickedIndex];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setMoves((prev: number) => prev + 1);
            evaluatePair(newFlipped);
        }
    }

    // ── Evaluar si las dos cartas forman un par ────────────────────────────────

    function evaluatePair([indexA, indexB]: number[]): void {
        const cardA: CardData = deck[indexA];
        const cardB: CardData = deck[indexB];

        if (cardA.pairId !== cardB.pairId) {

            setLocked(true);
            setTimeout(() => {
                setFlipped([]);
                setLocked(false);
            }, 900);
            return
        }


        setMatched((prev: number[]) => [...prev, cardA.pairId]);
        setFlipped([]);

    }

    // ── Reiniciar partida ──────────────────────────────────────────────────────

    function restart(): void {
        setDeck(createDeck(WORDS));
        setFlipped([]);
        setMatched([]);
        setMoves(0);
        setLocked(false);
    }

    return {
        /*variables*/

        score,
        totalPairs,
        moves,
        deck,
        flipped,
        matched,
        gameWon,
        
        /* methods */

        handleCardClick,
        restart,
    }
}

export default useCard
