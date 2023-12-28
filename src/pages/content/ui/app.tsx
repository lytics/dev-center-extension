import { useEffect } from 'react';
import { Box } from '@mui/material';
// import { Event } from '../../../models/testing';


export default function App() {
  const variableName = "jstag";
  // const maxRetries = 12;
  let retries = 0;

  useEffect(() => {
    const injectScript = () => {
      const script = document.createElement("script");
    
      script.src = chrome.runtime.getURL("/src/pages/tagLink/index.js");
      script.onload = () => {
        script.remove();
      };
    
      document.documentElement.appendChild(script);
    };
    injectScript();

    const handleMessage = (event) => {
      if (event.data && event.data.type === "retry") {
        retries++;
        console.log(`Retry ${retries}: Variable "${variableName}" is not found. Retrying in 5 seconds...`);
        injectScript();
      }
    };
    window.addEventListener("message", handleMessage);

    document.addEventListener('RW759_connectExtension', () => {
      // Generate a random number between 0 and 999999999
      const randomNumber: number = Math.floor(Math.random() * 1000000000);
    
      console.log('Random Number:', randomNumber);
    
      // // Update the event detail with the random number
      // if (event.detail) {
      //   event.detail.rand = randomNumber;
      // }
    
      // Send the random number to the background script using chrome.runtime.sendMessage
      chrome.runtime.sendMessage({ message: randomNumber });
    });

    // // Function to re-run your content script when needed
    // const runContentScript = () => {
    //   retries = 0; // Reset the retry count
    //   injectScript(); // Inject the script initially
    // };

    // // Listen for URL changes within the same website
    // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    //   console.log(message);
    //   if (message && message.type === "urlChange") {
    //     // When the URL changes within the same website, re-run the content script
    //     runContentScript();
    //   }
    // });
  }, []);

  useEffect(() => {
    console.log('content view loaded');
  }, []);

  return (
    <Box
      sx={{
        zIndex: 999,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        padding: "20px",
        width: "100%",
        backgroundColor: "#F8CF2C",
        fontWeight: "bold",
      }}
    >
      Hey look, it&apos;s Lytics!
    </Box>
  );
}
