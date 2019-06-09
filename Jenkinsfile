pipeline{
    agent any

    stages {
        stage ('dev') {
            steps {
                sh 'npm install'
            }
        }
        stage ('prod') {
            steps {
                echo "Bye bye"
            }
        }
        // stage ('close') {
        //     sh 'ps aux | grep node',
        //     sh 'ps aux | grep node | awk '{print $2}' | xargs kill'
        // }
    }
}