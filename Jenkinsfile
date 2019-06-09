pipeline{
    agent any

    stages {
        stage('Message') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage ('Disk Cleaning up') {
            steps {
                echo "Running Disk Cleanup"
                /*to add script file here*/
            }
        }
    }
}