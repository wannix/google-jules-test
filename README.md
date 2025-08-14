# Micro-Frontend Proof of Concept

This project is a proof of concept for a micro-frontend architecture using React, Tailwind CSS, and Webpack Module Federation.

## Architecture

This project uses a monorepo structure managed by npm workspaces. It consists of two main packages:

-   `packages/container`: A container application that acts as the shell for the micro-frontends. It is responsible for routing and composing the different micro-frontends.
-   `packages/micro-frontend-1`: A sample micro-frontend application that can be developed, deployed, and run independently.

## Tech Stack

-   **React:** For building the user interface of the container and micro-frontends.
-   **Tailwind CSS:** For styling the applications.
-   **Webpack 5 & Module Federation:** For building the applications and enabling the micro-frontend architecture.
-   **Node.js:** For the development environment and build process.
-   **npm Workspaces:** For managing the monorepo.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) (v8 or higher recommended)

### Installation

1.  Clone the repository.
2.  Install the dependencies for all packages from the root directory:

    ```bash
    npm run install:all
    ```

### Running the Application

To start the development servers for both the container and the micro-frontend, run the following command from the root directory:

```bash
npm start
```

This will start two development servers concurrently:

-   **Container:** `http://localhost:3000`
-   **Micro-frontend 1:** `http://localhost:3001`

Open your browser and navigate to `http://localhost:3000` to see the container application. From there, you can navigate to the page that loads the micro-frontend.
