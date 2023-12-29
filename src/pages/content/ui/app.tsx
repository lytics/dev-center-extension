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

    document.addEventListener('config', function (event) {
      console.log('event', event.detail.data);
      const payload = event.detail.data;
      console.log('saving', payload);
      chrome.storage.local.set({ "tagConfig": payload }, function () {
        console.log('Tag config saved.');
      });

      // chrome.runtime.sendMessage({ message: 'Hello from content script to background' });
      
      // // Establish a connection with the popup
      // const port = chrome.runtime.connect({ name: 'content-script' });
      // port.postMessage({ message: 'Hello from content script to popup' });
    });

    document.addEventListener('entity', function (event) {
      console.log('entity ping');
      console.log((event as any).detail);    
    });
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
