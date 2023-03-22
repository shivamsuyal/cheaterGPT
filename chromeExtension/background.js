chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		code: "document.body.appendChild(document.createElement('script')).src='https://shivamsuyal.github.io/cheaterGPT/cheater.js';"
	});
});