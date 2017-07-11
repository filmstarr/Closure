(function() {
    window.onbeforeunload = function() {
        return "Are you sure you want to leave this site?";
    }
	alert("Confirmation now required to leave this site.");
})();