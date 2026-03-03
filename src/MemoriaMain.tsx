import type { CardData} from "./types/cards.types";
import { Card } from "./components/Card";
import useCard from "./hooks/useCard";


export const WORDS: string[] = [
    "🌙 Luna",
    "☀️ Sol",
    "🌊 Mar",
    "🔥 Fuego",
    "🌲 Árbol",
    "⭐ Estrella",
];

export default function MemoryGame() {
    const {score, totalPairs, moves, deck,flipped,matched,gameWon,handleCardClick,restart} = useCard();
    {/*Renderizado*/}

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 font-mono">

            {/* Título */}
            <h1 className="text-4xl font-extrabold text-white tracking-widest mb-1 uppercase">
                Memoriz<span className="text-violet-400">Ando</span>
            </h1>
            <p className="text-violet-300/60 text-sm mb-8 tracking-wider">Encuentra todos los pares</p>

            {/* Contadores */}
            <div className="flex gap-4 mb-8">
                <div className="flex flex-col items-center bg-emerald-500/10 border border-emerald-400/30 rounded-2xl px-8 py-4 min-w-30">
                    <span className="text-emerald-400 text-xs uppercase tracking-widest font-semibold mb-1">Pares</span>
                    <span className="text-4xl font-extrabold text-emerald-300">
                        {score}
                        <span className="text-emerald-700 text-xl">/{totalPairs}</span>
                    </span>
                </div>

                <div className="flex flex-col items-center bg-violet-500/10 border border-violet-400/30 rounded-2xl px-8 py-4 min-w-30">
                    <span className="text-violet-400 text-xs uppercase tracking-widest font-semibold mb-1">Movimientos</span>
                    <span className="text-4xl font-extrabold text-violet-300">{moves}</span>
                </div>
            </div>

            {/* Grilla de cartas */}
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
                    <p className="text-2xl font-bold text-emerald-400">
                        ¡Ganaste en {moves} movimientos!
                    </p>
                </div>
            )}

            {/* Botón reiniciar */}
            <button
                onClick={restart}
                className="px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-95 transition-all text-white font-bold tracking-widest uppercase text-sm shadow-lg"
            >
                Nueva Partida
            </button>
        </div>
    );
}