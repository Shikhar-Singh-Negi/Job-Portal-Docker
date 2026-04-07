# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose the backend port (assuming 5001 or whatever it listens on)
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
