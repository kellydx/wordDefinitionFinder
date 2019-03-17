console.log('Looking up in progress');

chrome.runtime.onMessage.addListener(receiver);

window.word = "Word Definition Finder";

function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.text;
}