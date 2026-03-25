pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/i-kjain/Json_formatter.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Compile') {
            steps {
                sh 'echo "No compile needed for JS"'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deployment step (static hosting)"
            }
        }
    }
}
