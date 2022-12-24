function setTwitterClientInfo() {
	var parser = new URL(location.href);
	if (!isNaN(parser.pathname.split('/')[3])) {
		chrome.runtime.sendMessage(
			{
				endpoint: 'https://mico.re/api/getclient.php?id=' + parser.pathname.split('/')[3]
			},
			(response) => {
				json = response;
				var clientstr = json.source.replace("</a>", "").split(">")[1];
				var client = document.createElement("a");
				client.style = "margin-left: 2px;";
				client.appendChild(document.createTextNode(clientstr));
				client.classList.add("css-4rbku5", "css-18t94o4", "css-901oao", "css-16my406", "r-1loqt21", "r-xoduu5", "r-1q142lx", "r-1w6e6rj", "r-1tl8opc", "r-9aw3ui", "r-bcqeeo", "r-3s2u2q", "r-qvutc0");
				document.getElementsByClassName("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2")[0].appendChild(client);
			}
		);
	}

}

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		setTwitterClientInfo();
	}
);
setTimeout(() => { setTwitterClientInfo(); }, 5000)