import app from '../server/index';
import { registerRoutes } from '../server/routes';
import { createServer } from 'http';

// Create a server instance for route registration compatibility
const server = createServer(app);
let routesRegistered = false;

export default async (req: any, res: any) => {
    if (!routesRegistered) {
        await registerRoutes(server, app);
        routesRegistered = true;
    }
    // Forward request to Express app
    app(req, res);
};
