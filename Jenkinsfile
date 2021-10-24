pipeline {
     agent any    
     // tools {nodejs "node"}
     stages {
       stage('Git') {
            steps {
              git 'https://github.com/Shahid-prog/AskBnB.git'
            }
          }
        stage("Build") {
            steps {
                sh "sudo npm install"
            }
          }
    }
}
