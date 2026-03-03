export interface CardData {
    id: number;
    word: string;
    pairId: number;
}

export interface CardProps {
    card: CardData;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: () => void;
}