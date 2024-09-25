#!/usr/bin/node
const redis = require('redis');

// Create Redis client
const client = redis.createClient();

// Event handler for connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Event handler for errors
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});

// Subscribe to the channel "holberton school channel"
client.subscribe('holberton school channel');

// Handle incoming messages
client.on('message', (channel, message) => {
  console.log(message);

  if (message === 'KILL_SERVER') {
    client.unsubscribe('holberton school channel');
    client.quit();
  }
});
