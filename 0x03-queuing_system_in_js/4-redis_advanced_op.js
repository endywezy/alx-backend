#!/usr/bin/node
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Define the hash key and the values
const key = 'HolbertonSchools';
const values = {
  Portland: 50,
  Seattle: 80,
  'New York': 20,
  Bogota: 20,
  Cali: 40,
  Paris: 2
};

// Store the values in the hash
for (const [field, value] of Object.entries(values)) {
  client.hset(key, field, value, redis.print);
}

// Retrieve and display all the values of the hash
client.hgetall(key, (err, res) => {
  if (err) {
    console.error(`Error retrieving data: ${err}`);
  } else {
    console.log(res);
  }
  client.quit();
});
