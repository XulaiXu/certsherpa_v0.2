#!/bin/bash

# Ensure we're using Node.js 20
echo "Current Node.js version: $(node --version)"
echo "Current npm version: $(npm --version)"

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the project
echo "Building the project..."
npm run build

# Verify build output
echo "Build completed. Checking dist folder..."
ls -la dist/

echo "Build script completed successfully!"
