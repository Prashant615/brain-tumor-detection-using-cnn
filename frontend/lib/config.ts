/**
 * Environment configuration for the frontend application
 */

export const config = {
  // Backend API URL - defaults to localhost if not set
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000",
  
  // Add other environment variables here as needed
  // apiTimeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "10000"),
  // maxFileSize: parseInt(process.env.NEXT_PUBLIC_MAX_FILE_SIZE || "5242880"), // 5MB
} as const;

// Type-safe way to get config values
export const getBackendUrl = (): string => config.backendUrl;

// Helper function to get the full API endpoint URL
export const getApiEndpoint = (path: string): string => {
  const baseUrl = config.backendUrl.endsWith('/') 
    ? config.backendUrl.slice(0, -1) 
    : config.backendUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};
