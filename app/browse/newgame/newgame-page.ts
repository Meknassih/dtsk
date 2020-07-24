import { NavigatedData, Page, EventData } from "tns-core-modules/ui/page";
import { NewgameViewModel } from "./newgame-view-model";
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import { TextField } from "tns-core-modules/ui/text-field";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new NewgameViewModel();
    page.addCssFile("browse/newgame/newgame-page.css");
}

export function onAddPlayer(args: EventData) {
    // returnPress event will be triggered when user submits a value
    let textField = <TextField>args.object;
    if (textField.text.trim() === "")
        return;
    textField.page.bindingContext.players.push({
        id: textField.page.bindingContext.players.length,
        name: textField.text.trim(),
        createdAt: new Date(Date.now()),
        lastPlayedAt: new Date(Date.now()),
        duels: []
    });
    textField.text = "";
    setTimeout(() => {
        textField.focus();
        // textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
}

export function onStartGameTap(args: EventData) {

}
