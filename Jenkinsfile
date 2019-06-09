pipeline{
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('BuildId and Url') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage ('Date n time') {
            steps {
                echo "Getting Current Date and Time"
                sh 'chmod a+x datentime.sh'
                sh "./datentime.sh"
            }
        }
    }
}