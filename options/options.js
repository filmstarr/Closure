function save_options() {
	var changeTabIcon = document.getElementById('changeTabIcon').checked;
	var showClosureAlert = document.getElementById('showClosureAlert').checked;
	chrome.storage.sync.set({
		changeTabIcon: changeTabIcon,
		showClosureAlert: showClosureAlert
	});
}

function restore_options() {
	chrome.storage.sync.get({
		changeTabIcon: true,
		showClosureAlert: true
	}, function(items) {
		document.getElementById('changeTabIcon').checked = items.changeTabIcon;
		document.getElementById('showClosureAlert').checked = items.showClosureAlert;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('changeTabIcon').addEventListener('click', save_options);
document.getElementById('showClosureAlert').addEventListener('click', save_options);