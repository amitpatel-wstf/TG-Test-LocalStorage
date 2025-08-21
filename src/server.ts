// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Enable CORS for all routes
// app.use(cors());

// // Serve static files from public directory
// app.use(express.static(path.join(__dirname, '../public')));

// // Serve the main HTML file
// app.get('/', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// // Health check endpoint
// app.get('/health', (req: Request, res: Response) => {
//     res.json({ status: 'OK', timestamp: new Date().toISOString() });
// });

// app.listen(PORT, () => {
//     console.log(`Web server running on port ${PORT}`);
//     console.log(`Access your web app at: http://localhost:${PORT}`);
// });
