import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs:  60 * 1000, // 1 minute
    max: 60, // limit each IP to 60 requests per windowMs,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
     message: {
    error: "Too many requests from this IP, please try again after a minute.",
  },
})

export default limiter;