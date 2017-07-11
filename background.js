//Create context menu
var parent = chrome.contextMenus.create({"title": "Confirm Tab Closure", "onclick": injectClosure});

//Inject closure script
function injectClosure(info, tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'closure.js'
	});
}