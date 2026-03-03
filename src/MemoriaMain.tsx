import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.webp";
import img6 from "./assets/6.webp";

import type { CardData } from "./types/cards.types";
import { Card } from "./components/Card";
import useCard from "./hooks/useCard";

export const IMAGES: string[] = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
];

export default function MemoryGame() {
    const {
        score,
        totalPairs,
        moves,
        deck,
        flipped,
        matched,
        gameWon,
        handleCardClick,
        restart
    } = useCard();

    return (
        <div className="min-h-screen bg-sky-700 flex flex-col items-center justify-center p-8 font-mono">

            {/* Título */}
            <h1 className="text-4xl font-extrabold text-white tracking-widest mb-1 uppercase drop-shadow-lg">
                Memoriz<span className="text-fuchsia-300">Ando</span>
            </h1>

            <p className="text-white/80 text-sm mb-8 tracking-wider">
                Encuentra todos los pares
            </p>

            {/* Contadores */}
            <div className="flex gap-4 mb-8">

                {/* Pares */}
                <div className="flex flex-col items-center bg-sky-700 border-2 border-white rounded-2xl px-8 py-4 min-w-30 shadow-xl">
                    <span className="text-white text-xs uppercase tracking-widest font-semibold mb-1">
                        Pares
                    </span>
                    <span className="text-4xl font-extrabold text-white">
                        {score}
                        <span className="text-white/70 text-xl">/{totalPairs}</span>
                    </span>
                </div>

                {/* Movimientos */}
                <div className="flex flex-col items-center bg-fuchsia-500 border-2 border-white rounded-2xl px-8 py-4 min-w-30 shadow-xl">
                    <span className="text-white text-xs uppercase tracking-widest font-semibold mb-1">
                        Movimientos
                    </span>
                    <span className="text-4xl font-extrabold text-white">
                        {moves}
                    </span>
                </div>
            </div>

            {/* Grid de cartas */}
            <div className="grid grid-cols-4 gap-4 mb-10">
                {deck.map((card: CardData, index: number) => (
                    <Card
                        key={card.id}
                        card={card}
                        isFlipped={flipped.includes(index)}
                        isMatched={matched.includes(card.pairId)}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>

            {/* Mensaje de victoria */}
            {gameWon && (
                <div className="mb-6 text-center animate-bounce">
                    <p className="text-2xl font-bold text-white">
                        ¡Ganaste en {moves} movimientos!
                    </p>
                </div>
            )}

            {/* Botón reiniciar */}
            <button
                onClick={restart}
                className="px-8 py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 active:scale-95 transition-all text-white font-bold tracking-widest uppercase text-sm shadow-2xl border-2 border-white"
            >
                Nueva Partida
            </button>

        </div>
    );
}