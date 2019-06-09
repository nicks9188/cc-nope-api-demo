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
            echo 'Bye Bye from feature-1'
        }
    }
}