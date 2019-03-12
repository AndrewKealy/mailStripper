console.log("Chrome Extension ready to go");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  if(message.txt=="getContent"){
    let bylines = document.getElementsByClassName("author");
    let paragraphs = "";
    for (var i = 0; i<bylines.length;i++){
      paragraphs += bylines[i].innerHTML + " \n";
    }
    let paragraphNodes = document.getElementsByClassName("mol-para-with-font");
    for (var i=0;i<paragraphNodes.length;i++){
      if (paragraphNodes[i].parentNode.className !== "ins cleared mol-factbox-body") {
        paragraphs += paragraphNodes[i].textContent + " \n";

      }

    }
    let response = {
      txt: paragraphs
    }
    sendResponse(response);
  }
}


 //console.log(paragraphs);
