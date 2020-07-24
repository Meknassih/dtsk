import { Observable } from "tns-core-modules/data/observable";
import { Player } from '../../shared/models/player';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';

export class NewgameViewModel extends Observable {
    players: Array<Player>;

    constructor() {
        super();

        this.players = [];
    }

    onPlayerTap(args: ItemEventData) {
        const index = args.index;
        console.log(`Second ListView item tap ${index}`);
    }
}
