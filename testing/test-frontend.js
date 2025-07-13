const http = require('http');

const options = {
  hostname: '10.0.10.219',
  port: 3000,
  path: '/',
  method: 'GET',
  timeout: 5000
};

const req = http.request(options, res => {
  if (res.statusCode === 200) {
    console.log('Frontend is UP and responding with HTTP 200!');
    process.exit(0);
  } else {
    console.log(`Frontend is NOT responding as expected. HTTP code: ${res.statusCode}`);
    process.exit(1);
  }
});

req.on('timeout', () => {
  console.error('Request timed out.');
  req.abort();
  process.exit(1);
});

req.on('error', error => {
  console.error('Error connecting to frontend:', error.message);
  process.exit(1);
});

req.end(); 