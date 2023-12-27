import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from '@mui/material';
import '@pages/panel/Panel.css';

const Panel: React.FC = () => {
  // Initialize a state variable to store the received message
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Create a connection to the background script
    const backgroundConnection = chrome.runtime.connect({
      name: "devtools-panel"
    });

    console.log('devtools');

    // Listen for messages from the background script
    backgroundConnection.onMessage.addListener((receivedMessage) => {
      setMessage(receivedMessage.message);

    });

    // Cleanup the connection when the component unmounts
    return () => {
      console.log('disconnecting');
      backgroundConnection.disconnect();
    };
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <Box className="container">
      <Typography variant="h1">Dev Tools Panel</Typography>
      <Button>test</Button>
      <Box>
        {message ? (
          <div>{message}</div>
        ) : (
          <div>No message received yet.</div>
        )}
      </Box>
    </Box>
  );
};

export default Panel;