This is a solution for the following challenge.
To run this code, clone this repo to your computer. Then, in your terminal, run:
npm install
Then, run:
node server.js

The answers will output on your console.

Challenge:


Developer Challenge
The objective of this challenge is to parse a log file and do some analysis on it. It should be an easy task for anyone with previous experience programming. The challenge must be solved in node.js. 
Sample log can be downloaded here: https://www.dropbox.com/s/22ocrq2eprh7yiu/sample%20%281%29.log?dl=0
* Required
Requirements & output
The log file contains all requests to a server within a specific timeframe. Given the following endpoints:

GET /api/users/{user_id}/count_pending_messages
GET /api/users/{user_id}/get_messages
GET /api/users/{user_id}/get_friends_progress
GET /api/users/{user_id}/get_friends_score
POST /api/users/{user_id}
GET /api/users/{user_id}

Where {user_id} is the id of the user calling the backend.

Write a command line program that outputs a small analysis of the sample log containing at least the following:

For each of the URLs above:

- The number of times the URL was called.
- The mean (average), median and mode of the response time (connect time + service time).
- The "dyno" that responded the most.

The output should just be simple text lines. Note that we want aggregate data for all users, not stats on specific users.
What we are looking for
- Correctness
- Simple, clear, readable code
- Memory efficiency (optional - bonus points)
Questions & Delivery
If you have any questions to this challenge, please contact us at info@infinitylevels.com

The challenge should be delivered as a link to a public git repository or gist (github.com or bitbucket.com are preferred). 



Check List
Your Program:
  Can be run from the command line
 Is non-interactive, does not require user input
 Generates plain text output
 Returns one entry for each of the 6 endpoints listed above

