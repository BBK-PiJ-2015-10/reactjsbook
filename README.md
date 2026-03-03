# React.js Book - Example Projects

This repository contains example projects and code samples for learning React.js. Each directory represents a different concept or feature of React development.

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- npm (comes with Node.js) or yarn

## Repository Structure

This repository is organized into multiple independent projects, each demonstrating different React concepts:

### Frontend React Applications

These are Create React App projects that demonstrate various React features:

- **`basic-principles/library`** - Basic React principles and fundamentals
- **`css-import/library`** - CSS import and styling techniques
- **`forms/`** - Multiple form-related examples:
  - `library` - Basic forms
  - `uncontrolled` - Uncontrolled components
  - `validation` - Form validation
  - `fileuploads` - File upload handling
- **`further-topics/library`** - Advanced React topics
- **`graphqls/library`** - GraphQL integration
- **`hook-api/library`** - React Hooks API examples
- **`typescript/library`** - React with TypeScript
- **`libraries/`** - Using UI component libraries (Material-UI)
- **`router/`** - React Router for navigation
- **`global-state-redux/`** - Redux for global state management
- **`global-state-redux-async/`** - Redux with async operations
- **`global-state-redux-async-rx/`** - Redux with RxJS for async operations
- **`global-state-redux-async-saga/`** - Redux with Redux-Saga for async operations

### Backend and Special Projects

- **`backend/`** - Express.js backend with JWT authentication and JSON server
- **`server-side-rendering/`** - Server-side rendering (SSR) with React
- **`custom-library/`** - Creating a custom React library with Rollup

## Quick Start

### Running a Frontend React Application

Most React applications in this repository follow the same pattern. To run any of them:

1. Navigate to the project directory:
   ```bash
   cd <project-directory>/library
   # For example:
   cd basic-principles/library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to [http://localhost:3000](http://localhost:3000)

### Running Projects with Backend

Some projects (like `libraries`, `router`, `global-state-redux*`) include a `data.json` file for mock backend data.

1. First, navigate to the project directory and install dependencies:
   ```bash
   cd libraries
   npm install
   ```

2. Start the backend (JSON server) in one terminal:
   ```bash
   json-server -p 3001 -w data.json
   ```

3. In another terminal, start the React app:
   ```bash
   npm start
   ```

### Running the Backend Server

The `backend/` directory contains an Express.js server with JWT authentication:

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   
   Or run the JSON server:
   ```bash
   npm run backend
   ```

### Running Server-Side Rendering

For the SSR project:

1. Navigate to the directory:
   ```bash
   cd server-side-rendering
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build and start the server:
   ```bash
   npm start
   ```

### Building a Custom Library

For the custom library project:

1. Navigate to the directory:
   ```bash
   cd custom-library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the library:
   ```bash
   npm run build
   ```

## Common Commands

For most React applications created with Create React App:

- **`npm start`** - Runs the app in development mode
- **`npm test`** - Launches the test runner
- **`npm run build`** - Builds the app for production

## Project-Specific READMEs

Each project directory contains its own README with specific setup instructions and details about the concepts demonstrated. Check the individual README files for more information:

- [libraries/README.md](libraries/README.md)
- [router/README.md](router/README.md)
- [backend/README.md](backend/README.md)
- [custom-library/README.md](custom-library/README.md)
- [server-side-rendering/README.md](server-side-rendering/README.md)
- And others...

## Troubleshooting

### Port Already in Use

If you get an error that port 3000 is already in use, you can:
- Stop the other application using port 3000
- Or choose a different port by setting the PORT environment variable: `PORT=3001 npm start`

### Dependencies Not Found

If you encounter missing dependencies:
1. Make sure you're in the correct directory (usually inside a `library` subdirectory)
2. Run `npm install` to install all required dependencies
3. Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Backend Connection Issues

If the frontend can't connect to the backend:
- Make sure the JSON server or backend is running on the correct port (usually 3001)
- Check that the backend port in the frontend code matches the running backend

## Learning Path

If you're new to React, we recommend exploring the projects in this order:

1. **basic-principles** - Start here to learn React fundamentals
2. **css-import** - Learn about styling React components
3. **forms** - Understanding form handling in React
4. **hook-api** - Master React Hooks
5. **router** - Learn client-side routing
6. **libraries** - Using third-party UI libraries
7. **global-state-redux** - State management with Redux
8. **typescript** - Adding type safety with TypeScript
9. **server-side-rendering** - Advanced SSR techniques

## Resources

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Redux Documentation](https://redux.js.org/)
- [Material-UI Documentation](https://mui.com/)

## License

See individual project licenses for more information.
