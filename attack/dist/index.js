"use strict";
// import axios from "axios";
// async function sendRequest(otp: string) {
//   let data = JSON.stringify({
//     email: "sandeep@gmail.com",
//     otp: otp,
//     newPassword: "123123123",
//   });
//   let config = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: "http://localhost:4000/reset-password",
//     headers: {
//       "sec-ch-ua":
//         '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
//       "Next-Router-State-Tree":
//         "%5B%22%22%2C%7B%22children%22%3A%5B%22admin%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
//       "sec-ch-ua-mobile": "?0",
//       "User-Agent":
//         "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
//       Accept: "text/x-component",
//       Referer: "http://localhost:4000/admin",
//       "Next-Action": "a221b071140e55563e91a3226c508cb229c121f6",
//       "sec-ch-ua-platform": '"macOS"',
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };
//   try {
//     await axios.request(config);
//   } catch (err) {
//     // console.error("Error");
//   }
// }
// async function main() {
//   for (let i = 0; i <= 999999; i += 100) {
//     const promises = [];
//     // console.log("here for " + i);
//     for (let j = 0; j < 100; j++) {
//       console.log(i + j, "otp");
//       promises.push(sendRequest((i + j).toString()));
//     }
//     await Promise.all(promises);
//   }
// }
// main();
// const crypto = require("crypto");
// Function to generate a unique string representation of the user object with a timestamp
function stringifyUserWithTimestamp(user) {
    const timestamp = Date.now().toString(); // Get current timestamp
    return `${user.name}${user.email}${user.phone}${timestamp}`;
}
// Function to generate OTP using hashing with a timestamp
function generateOTPWithTimestamp(user) {
    const userString = stringifyUserWithTimestamp(user);
    // Hash the user string using SHA-256
    const hash = crypto.randomUUID();
    // Extract a portion of the hash and convert it into a numeric value
    const numericValue = parseInt(hash.substring(0, 6), 16);
    // Format the numeric value into a 6-digit OTP
    return numericValue;
}
// Example user object
const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
};
// Generate OTP based on user object with timestamp
const otp = generateOTPWithTimestamp(user);
console.log("Generated OTP:", otp);
