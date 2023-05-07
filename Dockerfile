FROM node:18.16.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
