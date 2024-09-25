#!/usr/bin/node
const kue = require('kue');
const queue = kue.createQueue();

// Job data object
const jobData = {
  phoneNumber: '1234567890',
  message: 'This is a notification message'
};

// Create a job in the 'push_notification_code' queue
const job = queue.create('push_notification_code', jobData)
  .save((err) => {
    if (!err) {
      console.log(`Notification job created: ${job.id}`);
    }
  });

// Listen for the 'complete' event of the job
job.on('complete', () => {
  console.log('Notification job completed');
});

// Listen for the 'failed' event of the job
job.on('failed', () => {
  console.log('Notification job failed');
});
