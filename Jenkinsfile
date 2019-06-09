pipeline{
    agent any

    stages {
        stage ('disk space alert') {
            steps {
                sh './scripts/diskspacealert.sh'
            }
        }
    }
}