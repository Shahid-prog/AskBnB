pipeline {
     agent any    
     // tools {nodejs "node"}
     stages {
       stage('Git') {
            steps {
                git branch: 'main', url: 'https://github.com/Shahid-prog/AskBnB.git'
            }
          }
       stage("Build") {
            steps {
                sh "npm install"
            }
          }
        stage("Deploy") {
            steps {
                sh "./scripts/deploy"
            }
          }
    }
}
