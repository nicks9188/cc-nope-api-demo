pipeline{
    agent any

    stages {
        stage ('---dev---') {
            steps {
                npm install
            }
        }
        stage ('---prod---') {
            steps {
                node app.js
            }
        }
    }
}