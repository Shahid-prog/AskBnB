pipeline {
     agent any    
     // tools {nodejs "node"}
     stages {
       stage('Git') {
            steps {
                sh "cd /nodeapp/"
                sh "cd /AskBnB/"
                git branch: 'main', url: 'https://github.com/Shahid-prog/AskBnB.git'
            }
          }
        stage("Build") {
            steps {
                sh "npm install"
            }
          }
    }
}
