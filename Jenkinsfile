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
                def username = 'Jenkins'
                echo "Hello .${username}"
                echo "I said, Hello . ${username}" 
            }
        }
    }
}