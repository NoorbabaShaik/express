# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if any)
COPY package*.json ./

# Install dependencies (you can skip this if there's no package.json)
RUN npm install || true

# Copy app files into the container
COPY . .

# Expose port 8080
EXPOSE 8080

# Run the app
CMD ["node", "index.js"]
