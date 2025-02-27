import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
}));
