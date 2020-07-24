import { NavigatedData, Page, EventData } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { BrowseViewModel } from "./browse-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
    page.addCssFile("browse/browse-page.css");
}

export function onNewGameTap(args: EventData) {
    const button = <Button>args.object;
    const page = <Page>button.page;

    page.frame.navigate({
        moduleName: "browse/newgame/newgame-page",
        context: {},
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

export function onResumeGameTap(args: EventData) {
    const button = <Button>args.object;
}