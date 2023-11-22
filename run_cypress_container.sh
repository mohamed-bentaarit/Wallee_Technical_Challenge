#!/bin/bash

# Remove the existing container if it exists
docker rm -f cypress_container >/dev/null 2>&1

# Run Cypress tests in a Docker container
docker run -it -v $(pwd):/e2e -w /e2e --name cypress_container cypress/included:13.5.1