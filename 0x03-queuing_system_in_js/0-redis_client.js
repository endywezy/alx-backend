#!/usr/bin/node
import { createClient } from 'redis';

// Create a Redis client
const client = createClient();

// Connect to Redis server
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle error event
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});
