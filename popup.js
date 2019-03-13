parsedText="";

let params = {
  active: true,
  currentWindow: true
}


chrome.tabs.query(params, gotTabs);
function gotTabs(tabs){
  let msg = {
    txt: "getContent"
  }
  chrome.tabs.sendMessage(tabs[0].id, msg, function(response){
      document.getElementById("parsedText").innerHTML=response.txt;
  });
}
