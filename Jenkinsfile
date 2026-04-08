pipeline {
    agent any

    environment {
        IMAGE_NAME = "job-portal"
        CONTAINER_NAME = "job-portal-app"
        GITHUB_REPO = "https://github.com/Shikhar-Singh-Negi/Job-Portal-Docker.git"
    }

    stages {

        stage('Clone Code') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: "${GITHUB_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${IMAGE_NAME}:latest ./main"
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                echo 'Removing old container if exists...'
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage('Run New Container') {
            steps {
                echo 'Starting new container...'
                sh """
                docker run -d \
                --name ${CONTAINER_NAME} \
                -p 5000:3000 \
                --env-file /home/ubuntu/app/server/.env \
                --restart unless-stopped \
                ${IMAGE_NAME}:latest
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Checking container status...'
                sh "docker ps | grep ${CONTAINER_NAME}"

                echo 'Checking application logs...'
                sh "docker logs ${CONTAINER_NAME} --tail 20"
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleaning unused images...'
                sh 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful: ${IMAGE_NAME}"
        }
        failure {
            echo "❌ Deployment failed!"
        }
    }
}