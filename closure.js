(function() {
    //Require confirmation to close or leave the site
    window.onbeforeunload = function() {
        return "Are you sure you want to leave this site?";
    }

    chrome.storage.sync.get(["showClosureAlert", "changeTabIcon"], function(items) {
        //Alert the user that confirmation is required to leave the site
        if (items.showClosureAlert) {
            alert("Closure: confirmation now required to leave this site");
        }

        //Replace tab icon
        if (items.changeTabIcon) {
            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = chrome.runtime.getURL('/img/favicon.ico');
            document.getElementsByTagName('head')[0].appendChild(link);
        }        
    });
})();