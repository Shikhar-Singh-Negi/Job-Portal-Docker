pipeline {
    agent any

    environment {
        // Names updated to match project convention (docker-compose.yml and repo)
        IMAGE_NAME = "job-portal"
        CONTAINER_NAME = "job-portal-app" 
        GITHUB_REPO = "https://github.com/Shikhar-Singh-Negi/Job-Portal-Docker.git"
    }

    stages {
        stage('Clone Code') {
            steps {
                // Checkout the repository for the latest code
                git url: "${GITHUB_REPO}", branch: "main"
            }
        }

        stage('Build Docker Image') {
            steps {
                // Building the image using the 'main' folder context (containing the Backend/Dockerfile)
                echo 'Building Docker image...'
                sh "docker build -t ${IMAGE_NAME}:latest ./main"
            }
        }

        stage('Stop and Remove Old Container') {
            steps {
                // Stop and remove the existing container if it exists
                echo 'Removing old container...'
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }

        stage('Run New Container') {
            steps {
                // Run the new container, exposing port 5000 and passing the .env from the 'main' directory
                echo 'Running new container...'
                sh """
                docker run -d \
                --name ${CONTAINER_NAME} \
                -p 5000:5000 \
                --env-file ./main/.env \
                ${IMAGE_NAME}:latest
                """
            }
        }

        stage('Image Cleanup') {
            steps {
                // Remove unused/dangling docker images to optimize system storage
                echo 'Pruning unused images...'
                sh 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo "Successfully deployed ${IMAGE_NAME}!"
        }
        failure {
            echo "Deployment failed for ${IMAGE_NAME}."
        }
    }
}