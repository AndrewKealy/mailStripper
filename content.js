console.log("Chrome Extension ready to go");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  if(message.txt=="getContent"){
    let bylines = document.getElementsByClassName("author");
    let paragraphs = "";
	if (bylines[0] != null){
	paragraphs = "<b> " +  bylines[0].innerHTML;
	    for (var i = 0; i<bylines.length-1;i++){
      		paragraphs += " and " + bylines[i+1].innerHTML;
    		}

	}
	paragraphs += "</b> <br><br>";
    let paragraphNodes = document.getElementsByClassName("mol-para-with-font");
    for (var i=0;i<paragraphNodes.length;i++){
      if (paragraphNodes[i].parentNode.className !== "ins cleared mol-factbox-body") {
        paragraphs += paragraphNodes[i].textContent + " <br>";

      }

    }
    let response = {
      txt: paragraphs
    }
    sendResponse(response);
  }
}
