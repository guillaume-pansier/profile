#!/usr/bin/env groovy

pipeline {
    agent any

    triggers {
      pollSCM('*/5 * * * *')
    }

    options {
      buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    // this tool will be used for all stages/steps except over-written
    tools {
      nodejs 'npm 6.13.0'
    }

    stages {
        stage('SCM') {
            steps {
                git 'https://github.com/guillaume-pansier/profile.git'
            }
        }
        stage('Build') {
           steps {
                // can override tool here
                sh 'npm install'
		            sh 'npm run build'
            }
        }
    }
}
