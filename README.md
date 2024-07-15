## Project Setup Instructions for Local Environment

This document provides step-by-step instructions to set up the local development environment for the project on both macOS and Windows.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or Yarn (v1.x or later)
- Git

### macOS Setup Instructions

1. **Install Homebrew**

   Homebrew is a package manager for macOS. You can install it by running the following command in your Terminal:

   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js and npm**

   Once Homebrew is installed, you can install Node.js and npm with the following command:

   ```sh
   brew install node
   ```

3. **Clone the Repository**

   Open your Terminal and run the following commands to clone the repository and navigate into the project directory:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

4. **Install Dependencies**

   Install the required dependencies using npm or Yarn:

   ```sh
   npm install
   # or
   yarn install
   ```

5. **Start the Development Server**

   To start the development server, run:

   ```sh
   npm start
   # or
   yarn start
   ```

6. **Open the Project in a Code Editor**

   It's recommended to use Visual Studio Code for editing the project. You can download it [here](https://code.visualstudio.com/).

### Windows Setup Instructions

1. **Install Chocolatey**

   Chocolatey is a package manager for Windows. You can install it by running the following command in an elevated Command Prompt or PowerShell:

   ```sh
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

2. **Install Node.js and npm**

   Once Chocolatey is installed, you can install Node.js and npm with the following command:

   ```sh
   choco install nodejs
   ```

3. **Clone the Repository**

   Open your Command Prompt or PowerShell and run the following commands to clone the repository and navigate into the project directory:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

4. **Install Dependencies**

   Install the required dependencies using npm or Yarn:

   ```sh
   npm install
   # or
   yarn install
   ```

5. **Start the Development Server**

   To start the development server, run:

   ```sh
   npm start
   # or
   yarn start
   ```

6. **Open the Project in a Code Editor**

   It's recommended to use Visual Studio Code for editing the project. You can download it [here](https://code.visualstudio.com/).

### Additional Configuration

- **Environment Variables**

  Ensure you have all necessary environment variables configured. You can create a `.env` file in the root of your project and add your variables there.

- **Expo CLI**

  If the project is using Expo, you might need to install the Expo CLI globally:

  ```sh
  npm install -g expo-cli
  ```

  Then, you can start the Expo server with:

  ```sh
  expo start
  ```

### Troubleshooting

- **Common Issues**

  - Ensure all dependencies are installed correctly.
  - Check for any missing environment variables.
  - Ensure you have the correct versions of Node.js and npm/Yarn.

For more detailed information, please refer to the docs below:
