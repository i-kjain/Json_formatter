pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/i-kjain/Json_formatter.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Compile') {
            steps {
                sh 'echo "No compile needed"'
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
        sh '''
        docker build -t json-formatter .
        docker stop json-container || true
        docker rm json-container || true
        docker run -d -p 8081:80 --name json-container json-formatter
        '''
    }
}
    }
}
