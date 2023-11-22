# Wallee_Technical_Challenge

## Cypress Test Execution Using Docker
### Prerequisites
Docker installed on your machine. If not installed, you can download it from Docker's official website.

or if on MacOs, you can also install it via Homebrew

```
brew install --cask docker
```

### Running Cypress Tests with Docker
1. Clone the Repository

```
git clone https://github.com/mohamed-bentaarit/Wallee_Technical_Challenge.git
cd Wallee_Technical_Challenge
```

2. Execute Cypress Tests in a Docker Container

Run the provided script run_cypress_docker.sh to execute Cypress tests within a Docker container.

```
chmod +x run_cypress_container.sh   # Make the script executable (if needed)
./run_cypress_container.sh          # Run Cypress tests in Docker container
```

## Running Cypress Tests with GitHub Actions
### Manual Trigger

To manually trigger tests:

- Navigate to the "Actions" tab on your GitHub repository.
- Select the "Cypress Tests" workflow.
- Click on the "Run workflow" button.