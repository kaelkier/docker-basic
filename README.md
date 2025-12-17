# Basic Dockerfile - Node.js (Express)

A simple Dockerfile setup for running a Node.js (Express) application inside a container.

## How to run
1. **Build the image**
   ```bash
   docker build -t express-docker .
   ```
2. **Run the container**
   ```bash
   docker run -d --name dkr-basic -p 3000:3000 express-docker
   ```
   - `-d` runs the container in detached mode
   - `--name` assigns a readable name to the container
3. **Output**
   
   Access the app:
   ```bash
   curl http://localhost:3000
   ```
   Output should be:
   ```bash
   Hello, There!
   ```
