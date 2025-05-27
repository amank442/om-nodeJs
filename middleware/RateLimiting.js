const rateLimit = require('express-rate-limit');


// IP-based rate limiter middleware
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,         
  max:10,                         
  message: 'Too many requests from this IP, please try after 2 minute....',
  standardHeaders: true,           
  legacyHeaders: false             
});

module.exports= limiter