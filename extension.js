// Author: jechoi@redhat.com

const Main = imports.ui.main;
const SessionMode = imports.ui.sessionMode;

function init() {
}

function enable() {
    let menu = Main.panel.statusArea['dateMenu'];
    menu.actor.hide()
}

function disable() {
    let menu = Main.panel.statusArea['dateMenu'];
    menu.actor.show()
}
