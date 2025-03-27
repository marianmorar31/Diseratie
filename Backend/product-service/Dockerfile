# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install -g nodemon

# Copy source code
COPY . .

# Set environment variables (if needed)
ENV PORT=5001

# Expose port
EXPOSE 5001

# Start the microservice
CMD ["npm", "run", "dev"]