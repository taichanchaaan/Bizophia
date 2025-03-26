# Bizophia Project Rules

## Project Goal
Deploy the original Bizophia application from Manus to GitHub while maintaining its exact design and functionality.

## Core Rules

### 1. Deployment Strategy
- **GitHub-First Approach**: Focus on deploying to GitHub rather than local development
- Use the `deploy-original-manus` branch for all original Manus files
- Configure GitHub Pages for hosting the application

### 2. File Integrity
- Maintain the original structure and content of Manus files
- Do not modify the core JavaScript or CSS files unless absolutely necessary
- Any modifications should be minimal and focused on enabling proper deployment

### 3. SPA Routing
- Implement SPA routing fixes specifically for GitHub Pages
- Use the 404.html redirect technique for handling client-side routing
- Ensure all navigation within the app works correctly

### 4. Progress Tracking
- Document all changes and progress in PROGRESS.md
- Update the progress file after each significant milestone
- Clearly mark completed tasks and next steps

### 5. Testing
- Test the deployed application on GitHub Pages thoroughly
- Verify all navigation paths and functionality
- Document any issues encountered during testing

### 6. Version Control
- Make regular commits with clear, descriptive messages
- Use branches for experimental changes
- Always push changes to GitHub after significant progress

## Prohibited Actions
- Do not rewrite or refactor the original code unnecessarily
- Do not introduce new features without explicit approval
- Do not change the visual design or user experience
- Do not deploy to platforms other than GitHub without discussion

## Success Criteria
- The application is successfully deployed to GitHub Pages
- All pages and navigation work correctly
- The application maintains the exact look and feel of the original
- Documentation is complete and clear

This document serves as the guiding principles for the Bizophia project and should be referenced whenever making decisions about the project direction or implementation details.
