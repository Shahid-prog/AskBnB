pipeline {
     agent any    
     tools {nodejs "Build Nodejs"}
     stages {
       stage('Git') {
            steps {
                git branch: 'main', url: 'https://github.com/Shahid-prog/AskBnB.git'
            }
          }
       stage("Build") {
            steps {
                sh 'npm install'
            }
          }
        stage("Deploy") {
            steps {
                 sshagent (credentials: ['	0742029f-4f63-469d-a87c-3be813192fbd']) {
                    sh "ssh -T teamgamma@3.12.150.136"
                  }
                //sh "chmod +x scripts/deploy"
                //sh "./scripts/deploy"
                 //sh 'ssh teamgamma@3.12.150.136:22'
            }
          }
    }
}
