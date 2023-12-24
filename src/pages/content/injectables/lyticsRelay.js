// lyticsRelay.js
window.lyticsRelay = true;

function waitAndCall(callbackFunction) {
  setTimeout(callbackFunction, 1000);
}

function myFunction() {
  console.log("Function called after 5 seconds");
  console.log('jstag', typeof jstag !== 'undefined');

  var myCallbackFunction = function(profile){
    console.log(profile.data);
    document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
      detail: profile.data
    }));
  }

  jstag.call('entityReady', myCallbackFunction); // register the listener
}

waitAndCall(myFunction);