import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from '@sentry/node';
import { clerkWebhooks } from './controllers/webhooks.js';
import companyRoutes from './routes/companyRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import bodyParser from 'body-parser';

const app = express();

(async () => {
  await connectDB();
  await connectCloudinary();

  // ✅ Webhook route FIRST with raw parser
app.post("/webhooks", bodyParser.raw({ type: "application/json" }), clerkWebhooks);

  // ✅ Standard middlewares AFTER webhook
  app.use(cors());
  app.use(express.json());
  app.use(clerkMiddleware({ secretKey: process.env.CLERK_SECRET_KEY }));

  // ✅ Routes
  app.get('/', (req, res) => res.send('API Working ✅'));
  app.get('/debug-sentry', (req, res) => {
    throw new Error('Manual sentry test error!');
  });

  app.use('/api/company', companyRoutes);
  app.use('/api/jobs', jobRoutes);
  app.use('/api/users', userRoutes);

  // ✅ Sentry error reporting
  Sentry.setupExpressErrorHandler(app);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
})();
