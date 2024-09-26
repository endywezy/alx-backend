#!/usr/bin/node
const kue = require('kue');
const queue = kue.createQueue();

// Blacklisted phone numbers
const blacklistedNumbers = ['4153518780', '4153518781'];

/**
 * Send notification to a phone number.
 * @param {string} phoneNumber - The phone number to send notification to.
 * @param {string} message - The message to send.
 * @param {object} job - The Kue job object.
 * @param {function} done - The callback function for completion.
 */
function sendNotification(phoneNumber, message, job, done) {
  // Track job progress from 0% to 100%
  job.progress(0, 100);

  // Check if the phone number is blacklisted
  if (blacklistedNumbers.includes(phoneNumber)) {
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  // Simulate some asynchronous work and track progress to 50%
  job.progress(50, 100);
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
  
  // Complete the job successfully
  done();
}

// Process jobs from the 'push_notification_code_2' queue with a concurrency of 2
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});
