const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.set('Set-Cookie', "embeddedCookie=Hello from an embedded third party cookie!;Path=/;Secure;SameSite=None");
  res.send("Express on Vercel");
});
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
// Export the Express API
module.exports = app;