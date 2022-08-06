import express, { Application /* Response, Request */ } from "express";
import cors from "cors";
// import jsonwebtoken from "jsonwebtoken";

import serverConfig from "./configs";
import BlogRoute from "./routes/blog.route";
import UserRoute from "./routes/user.route"
import routes from "./configs/routes";

const app: Application = express();
// Exception Handler
// HSTS
// HttpsRedirection
// Static Files
// Routing
// Cors
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE", "UPDATE", "PATCH"],
		credentials: true,
	})
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
// Authentication
// Authorization
// Custom Middleware
// Endpoint
app.use(UserRoute)
app.use(BlogRoute)

app.listen(serverConfig.PORT, () => {
	console.log(`Server is listening to port:${serverConfig.PORT}`);
});
