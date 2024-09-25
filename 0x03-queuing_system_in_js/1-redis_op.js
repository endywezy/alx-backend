#!/usr/bin/node

import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

// When the client is connected to the Redis server
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// When there's an error connecting to the Redis server
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

/**
 * Sets a new value in the Redis store.
 * @param {string} schoolName - The key to store in Redis.
 * @param {string} value - The value to store in Redis.
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

/**
 * Displays the value associated with a given key in the Redis store.
 * @param {string} schoolName - The key to retrieve the value for.
 */
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(`Error retrieving value for ${schoolName}: ${err.message}`);
    } else {
      console.log(reply);
    }
  });
}

// Call the functions as specified
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
