# Use a base Node.js image
FROM node:23.5.0

# Set working directory
WORKDIR /app/

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire app
COPY . .

# Expose the backend port
EXPOSE 8080

# Start the application
CMD ["npm", "start","run"]