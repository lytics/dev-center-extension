import { useEffect } from 'react';
import { Box } from '@mui/material';
import useStorage from '@src/shared/hooks/useStorage';
import tagConfigStore from '@src/shared/storages/tagConfigStorage';
import { TagConfigModel } from '@src/shared/models/tagConfigModel';
// import { Event } from '../../../models/testing';


export default function App() {
  const variableName = "jstag";
  let retries = 0;
  const storedTagConfig = useStorage(tagConfigStore);

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
      const payload = (event as any).detail.data;
      tagConfigStore.set(payload).then(() => {
        console.log('Tag config saved.');
      });
    });

    window.addEventListener('message', function (event) {
      if (event.source === window && event.data.action === 'backgroundToContent') {
        // Handle the message from background.js
        const backgroundData = event.data.data;
        console.log('Received message from background in content:', backgroundData);
      }
    });

    // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    //   console.log('Message from popup script:', message);
      
    //   // Send a response back to the content script if needed
    //   sendResponse({ received: true });
    // });
    // chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //   if (request.action === 'popuptocontent') {
    //     console.log('popup to content');
    //   }
    // });

    // const port = chrome.runtime.connect({ name: 'content-script' });
    // port.onMessage.addListener(function (message) {
    //   // Handle messages from the background script
    //   console.log('Received message from background:', message);
    // });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action == 'getConfig') {
        window.postMessage({ action: 'getConfig' }, '*');
      }
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
