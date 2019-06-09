pipeline{
    agent any

    stages {
        stage ('---dev---') {
            steps {
                sh 'npm install'
            }
        }
        stage ('---prod---') {
            steps {
                sh 'node app.js'
            }
        }
    }
}