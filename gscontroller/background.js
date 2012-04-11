execute = function(code) {
    chrome.tabs.getAllInWindow( null, function(tabs) {
        for( var i=0; i<tabs.length; i++ ) {
            tab = tabs[i];
            if( tab.url.search( /grooveshark\.com/ ) >= 0 ) {
                chrome.tabs.sendRequest( tab.id, {
                    command: "ExecuteScript",
                    code: code
                });
                break;
            }
        }
    });
}

vichrome.plugins.addCommand({
    name: "GrooveSharkPlayStop",
    func: function() {
        execute('$("button#player_play_pause").click()');
        return false;
    }
});

vichrome.plugins.addCommand({
    name: "GrooveSharkNext",
    func: function() {
        execute('$("button#player_next").click()');
        return false;
    }
});

vichrome.plugins.addCommand({
    name: "GrooveSharkPrevious",
    func: function() {
        execute('$("button#player_previous").click()');
        return false;
    }
});
