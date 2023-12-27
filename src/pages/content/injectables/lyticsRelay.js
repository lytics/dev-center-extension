// lyticsRelay.js
// // Define an object that will serve as our library
// const lyticsRelay = {
//   // Function to send data
//   send: (data) => {
//     console.log('lyticsRelay - Sending Data:', data);
//     document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
//       detail: profile.data
//     }));
//   },

//   // Function to receive data (a placeholder)
//   receive: (callback) => {
//     console.log('lyticsRelay - Receiving Data');
//     // You can implement the logic to receive data here and invoke the callback
//     // For example, if you're simulating data reception, you can do:
//     const receivedData = { message: 'This is some received data' };
//     callback(receivedData);
//   },
// };

// let _lytics_dev_tools = lyticsRelay || window._lytics_dev_tools;


function waitAndCall(callbackFunction) {
  setTimeout(callbackFunction, 1000);
}

function myFunction() {
  console.log("Function called after 5 seconds");
  console.log('jstag', typeof jstag !== 'undefined');

  var myCallbackFunction = function(profile){
    console.log(profile.data);
    document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
      // detail: {
      //   name: 'profile',
      //   context: profile.data
      // }
      detail: profile.data
    }));

  }

  jstag.call('entityReady', myCallbackFunction); // register the listener
}

waitAndCall(myFunction);