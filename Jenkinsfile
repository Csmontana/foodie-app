pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'bootstrap-experiment', url: 'https://github.com/Csmontana/foodie-app.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t foodie-app-backend ./backend'
                sh 'docker build -t foodie-app-frontend ./frontend'
            }
        }

        stage('Docker Run') {
            steps {
                sh 'docker run -d -p 8081:8080 foodie-app-backend'
                sh 'docker run -d -p 4201:80 foodie-app-frontend'
            }
        }
    }
}
