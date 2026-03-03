export interface CardData {
    id: number;
    pairId: number;
    image: string;
}

export interface CardProps {
    card: CardData;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: () => void;
}