(function() {
    window.onbeforeunload = function() {
        return "Are you sure you want to close this tab?";
    }
	alert("Tab closure confirmation now required.");
})();