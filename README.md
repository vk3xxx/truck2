# Truckify - Modern Truck Management System

A comprehensive truck management system built with modern technologies and optimized for Coolify deployment.

## 🚀 Features

- **Real-time Tracking**: GPS-based truck location tracking
- **Fleet Management**: Complete fleet overview and management
- **Driver Management**: Driver profiles, schedules, and performance
- **Route Optimization**: AI-powered route planning
- **Maintenance Tracking**: Vehicle maintenance schedules and alerts
- **Analytics Dashboard**: Real-time analytics and reporting
- **Mobile Responsive**: Works on all devices

## 🛠 Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Go with Gin framework
- **Database**: PostgreSQL
- **Cache**: Redis
- **Message Queue**: RabbitMQ
- **Containerization**: Docker & Docker Compose
- **Deployment**: Coolify-ready configuration

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose
- Coolify instance running
- Git

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Truck2
```

2. Start the development environment:
```bash
docker-compose -f docker-compose.dev.yml up -d
```

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- Admin Dashboard: http://localhost:3000/admin

### Coolify Deployment

1. **Add to Coolify**:
   - Connect your Git repository
   - Select the `docker-compose.yml` file
   - Configure environment variables
   - Deploy!

2. **Environment Variables**:
   - `DATABASE_URL`: PostgreSQL connection string
   - `REDIS_URL`: Redis connection string
   - `JWT_SECRET`: JWT signing secret
   - `RABBITMQ_URL`: RabbitMQ connection string

## 📁 Project Structure

```
Truck2/
├── frontend/          # React frontend application
├── backend/           # Go backend API
├── docker-compose.yml # Production Docker setup
├── docker-compose.dev.yml # Development Docker setup
├── coolify/          # Coolify-specific configurations
└── docs/            # Documentation
```

## 🔧 Configuration

### Coolify Integration

The project includes optimized configurations for Coolify:

- **Health Checks**: Automatic health monitoring
- **Auto-scaling**: Horizontal pod autoscaling
- **SSL/TLS**: Automatic certificate management
- **Backup**: Automated database backups
- **Monitoring**: Built-in metrics and logging

### Environment Variables

Create a `.env` file for local development:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/truckify

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-jwt-key

# RabbitMQ
RABBITMQ_URL=amqp://guest:guest@localhost:5672/

# API Configuration
API_PORT=8080
FRONTEND_PORT=3000
```

## 📊 Monitoring & Analytics

- **Application Metrics**: Prometheus integration
- **Logging**: Structured logging with ELK stack
- **Tracing**: Distributed tracing with Jaeger
- **Alerts**: Automated alerting system

## 🔒 Security

- **Authentication**: JWT-based authentication
- **Authorization**: Role-based access control
- **HTTPS**: SSL/TLS encryption
- **Rate Limiting**: API rate limiting
- **Input Validation**: Comprehensive input sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in `/docs`

---

**Built with ❤️ for modern truck management** 