# Environment Configuration

This project uses environment variables to configure the backend API connection and other settings.

## Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Update the values in `.env.local` as needed for your environment.

## Environment Variables

### Required Variables

- `NEXT_PUBLIC_BACKEND_URL`: The URL of the backend API server
  - Default: `http://127.0.0.1:5000`
  - Production example: `https://your-backend-api.com`
  - Staging example: `https://staging-backend-api.com`

### Environment-specific Examples

#### Development (.env.local)
```bash
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:5000
```

#### Production (.env.production.local)
```bash
NEXT_PUBLIC_BACKEND_URL=https://your-production-backend.com
```

#### Staging (.env.staging.local)
```bash
NEXT_PUBLIC_BACKEND_URL=https://your-staging-backend.com
```

## Notes

- Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the client-side code
- The `.env.local` file is ignored by Git for security
- Always use the `.env.example` file as a template for required variables
- The application will fall back to `http://127.0.0.1:5000` if no backend URL is configured
