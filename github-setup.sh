#!/bin/bash

# GitHub setup script for Bizophia project
echo "Setting up GitHub connection for Bizophia project..."

# Get GitHub username
read -p "Enter your GitHub username: " github_username

# Get repository name (default: bizophia)
read -p "Enter your existing repository name: " repo_name

# Confirm repository details
echo "Connecting to: https://github.com/$github_username/$repo_name"
read -p "Is this correct? (y/n): " confirm
if [[ $confirm != "y" && $confirm != "Y" ]]; then
  echo "Setup canceled. Please run the script again with the correct repository information."
  exit 1
fi

# Add remote
echo "Adding GitHub remote..."
git remote add origin "https://github.com/$github_username/$repo_name.git"

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Setup complete! Your Bizophia project is now on GitHub at: https://github.com/$github_username/$repo_name"
echo "To deploy using GitHub Pages:"
echo "1. Go to https://github.com/$github_username/$repo_name/settings/pages"
echo "2. Select the main branch"
echo "3. Click Save"
