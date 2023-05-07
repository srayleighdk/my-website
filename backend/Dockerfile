# Use an official Node.js runtime as a parent image
FROM node:18.16.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the application will run on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
