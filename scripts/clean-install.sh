#!/bin/bash
set -e

echo "Cleaning up node_modules and lock files..."
rm -rf node_modules package-lock.json yarn.lock

echo "Running npm install..."
npm install

echo "Clean install completed!"
