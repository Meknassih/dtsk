import { Duel } from './duel';

export interface Player {
    id: number;
    name: string;
    color?: string;
    duels: Array<Duel>
    createdAt: Date;
    lastPlayedAt: Date;
}