pipeline{
    agent any

    stages {
        stage('Message') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage ('disk space alert') {
            steps {
                echo "Hello"
            }
        }
    }
}