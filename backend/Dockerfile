# Step 1: Use a smaller base image for Node.js
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the code
COPY . .

# Step 5: Set the non-root user for security
USER node

# Step 6: Expose port 3000
EXPOSE 3000

# Step 7: Command to run the app
CMD ["node", "server.js"]
