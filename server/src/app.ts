import express, { Application, Response, Request } from "express"
import cors from "cors";
import jsonwebtoken from "jsonwebtoken";

import serverConfig from "./configs";

const app: Application = express();
// Exception Handler
// HSTS
// HttpsRedirection
// Static Files
// Routing
// Cors
app.use(cors());
// Authentication
// Authorization
// Custom Middleware
// Endpoint


app.listen()