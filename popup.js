console.log('popup running!!');

//chrome.pageAction.onClicked.addListener(buttonClicked);
parsedText="";
console.log("buttonClicked!!!");

let params = {
  active: true,
  currentWindow: true
}


chrome.tabs.query(params, gotTabs);
function gotTabs(tabs){
  let msg = {
    txt: "getContent"
  }
  console.log("buttonClicked222");
  chrome.tabs.sendMessage(tabs[0].id, msg, function(response){
      document.getElementById("parsedText").innerHTML=response.txt;
  });
}


