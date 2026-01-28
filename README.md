# reactjsbook

This repository contains multiple React.js projects demonstrating various concepts and patterns.

## Auto-Restart on File Changes

### For React Applications
All React apps in this repository are built with Create React App, which includes built-in hot module reloading. When you run `npm start` in any React project, the application will automatically reload in the browser whenever you save changes to `.js` files.

### For Backend API Servers (json-server)
For projects that use json-server (hook-api/library, typescript/library, and further-topics/library), we've added nodemon to enable auto-restart functionality:

**To start the backend server with auto-restart:**
```bash
npm run server
```

This command will:
- Start json-server on port 3001
- Watch for changes to `data.json`
- Automatically restart the server when files are modified

**Alternative (manual):**
```bash
npx json-server -p 3001 data.json
```

Note: json-server has built-in file watching, so data reloads when data.json changes, but nodemon provides more comprehensive restart capabilities.

### Projects with Auto-Restart
- **hook-api/library** - React app + json-server backend
- **typescript/library** - TypeScript React app + json-server backend  
- **further-topics/library** - React app + json-server backend

### How It Works
- **React apps**: Built-in hot-reloading via webpack-dev-server (part of react-scripts)
- **json-server**: Uses nodemon to watch for file changes and restart the server

For more details, see the README in each project directory.

