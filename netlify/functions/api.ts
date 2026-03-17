import serverless from "serverless-http";
import app from "../../server/index";
import { registerRoutes } from "../../server/routes";
import { createServer } from "http";

const server = createServer(app);
let routesRegistered = false;

export const handler = async (event: any, context: any) => {
  if (!routesRegistered) {
    await registerRoutes(server, app);
    routesRegistered = true;
  }
  
  // serverless-http handles the conversion between Netlify's event and Express's req/res
  const processHandler = serverless(app);
  return processHandler(event, context);
};
