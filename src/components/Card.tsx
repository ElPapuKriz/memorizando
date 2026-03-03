import type { CardProps } from "../types/cards.types";

export function Card({ card, isFlipped, isMatched, onClick }: CardProps) {
    const isVisible: boolean = isFlipped || isMatched;

    const frontFaceStyle = isMatched
        ? "bg-gradient-to-br from-emerald-400 to-teal-600 border-emerald-300/50"
        : "bg-gradient-to-br from-amber-300 to-orange-400 border-amber-200/50";

    return (
        <div
            className="relative w-28 h-36 cursor-pointer"
            style={{ perspective: "600px" }}
            onClick={onClick}
        >
            {/* Contenedor que rota al voltear */}
            <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isVisible ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Cara trasera — carta oculta */}
                <div className="absolute inset-0 rounded-2xl" style={{ backfaceVisibility: "hidden" }}>
                    <div className="w-full h-full rounded-2xl bg-linear-to-br from-violet-600 to-indigo-800 shadow-lg flex items-center justify-center border border-violet-400/30">
                        <span className="text-4xl select-none">✦</span>
                    </div>
                </div>

                {/* Cara delantera — palabra visible */}
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className={`w-full h-full rounded-2xl flex items-center justify-center border text-center px-2 shadow-lg ${frontFaceStyle}`}>
                        <span className="text-base font-bold text-white drop-shadow select-none">
                            {card.word}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}