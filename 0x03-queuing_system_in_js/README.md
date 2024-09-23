Queuing System with Node.js and Redis
This repository contains code for building a basic queuing system using Node.js and Redis. It includes functionalities like creating jobs, processing them asynchronously, tracking progress, and handling errors.

Prerequisites
Node.js and npm installed on your system
Basic understanding of Node.js, JavaScript, and Redis
Installation
Clone this repository:
Bash
git clone https://github.com/endywezy/0x03-queuing_system_in_js.git
Use code with caution.

Navigate to the project directory:
Bash
cd queuing_system_in_js
Use code with caution.

Install dependencies:
Bash
npm install
Use code with caution.

Running the application
Each exercise has its own execution instructions. The general format involves using npm run dev followed by the script name. Here's an example:

Bash
npm run dev 1-redis_op.js
Use code with caution.

This command will start a development server using nodemon which restarts the script automatically on changes.

Note: Some exercises require running multiple scripts at the same time in separate terminals. The instructions will specify which scripts to run and in which terminals.

Exercises
The repository is structured with exercises covering various aspects of the queuing system. Each exercise has its own corresponding JavaScript file.

Install Redis Server:

Instructions on downloading and installing Redis are provided.
Start the Redis server and verify its functionality.
Node.js Redis Client:

Establishes a connection between Node.js and Redis server.
Demonstrates basic operations like connecting, setting values, and retrieving values.
Node.js Redis Client and Basic Operations:

Extends the previous exercise by adding functions to set and retrieve values from Redis using callbacks.
Node.js Redis Client and Async Operations:

Modifies the previous exercise to use async/await syntax for asynchronous operations.
Node.js Redis Client and Advanced Operations:

Demonstrates storing and retrieving hash values in Redis.
Node.js Redis Client Publisher and Subscriber:

Implements a basic publisher-subscriber pattern using Redis channels.
One script publishes messages, while another subscribes and receives them.
Create the Job Creator (Using Kue):

Introduces kue module for managing jobs in a queue.
Creates a script to add jobs to the queue with job data.
Create the Job Processor (Using Kue):

Creates a script to process jobs from the queue and perform specific actions based on the job data.
Track Progress and Errors with Kue: Create the Job Creator:

Enhances the job creator script to handle arrays of jobs and track their progress and errors in the queue.
Track Progress and Errors with Kue: Create the Job Processor:

Modifies the job processor script to handle tracking progress, blacklisting phone numbers, and reporting errors.
Writing the test for job creation:

Implements unit tests for the job creation function using mocha and kue.testMode.
In Stock? (Bonus):

Introduces an inventory management example using Express.js and Redis.
Implements functionalities like listing available products and handling stock levels.
Resources
Redis documentation: https://redis.io/docs/latest/
Kue.js documentation: https://github.com/Automattic/kue
Node.js documentation: https://nodejs.org/en
This README provides a high-level overview of the project. Each exercise within the repository has its own comments and instructions within the corresponding JavaScript files.







