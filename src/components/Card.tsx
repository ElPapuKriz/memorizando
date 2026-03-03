import type { CardProps } from "../types/cards.types";

export function Card({ card, isFlipped, isMatched, onClick }: CardProps) {

    const isVisible: boolean = isFlipped || isMatched;

    const frontFaceStyle = isMatched
        ? "bg-fuchsia-500 border-2 border-white"
        : "bg-sky-700 border-2 border-white";

    return (
        <div
            className="relative w-28 h-36 cursor-pointer"
            style={{ perspective: "600px" }}
            onClick={onClick}
        >

            {/* Contenedor que rota */}
            <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isVisible ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >

                {/* Parte trasera */}
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="w-full h-full rounded-2xl bg-linear-to-br from-sky-700 to-fuchsia-500 shadow-xl flex items-center justify-center border-2 border-white">
                        <span className="text-4xl text-white select-none">✦</span>
                    </div>
                </div>

                {/* Parte frontal */}
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <div className={`w-full h-full rounded-2xl flex items-center justify-center text-center px-2 shadow-xl ${frontFaceStyle}`}>
                        <span className="text-base font-bold text-white drop-shadow-lg select-none">
                            <img
                                src={card.image}
                                alt="card"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}