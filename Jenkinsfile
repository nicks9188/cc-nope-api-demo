pipeline{
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Message') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage ('Disk Cleaning up') {
            steps {
                echo "Cleaning Up Workspace"
                sh 'chmod a+x DiskCleanup.sh'
                sh "./DiskCleanup.sh"
            }
        }
    }
}