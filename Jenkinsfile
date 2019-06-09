pipeline{
    agent any

    stages {
        stage ('disk space alert') {
            steps {
                cd scripts,
                sh diskspacealert.sh
            }
        }
    }
}