pipeline{
    agent any

    stages {
        stage ('node version') {
            steps {
                sh 'node -v'
            }
        }
        stage ('npm version') {
            steps {
                sh 'npm -v'
            }
        }
        stage ('message') {
            steps {
                sh './scripts/message.sh'
            }
        }
    }
}