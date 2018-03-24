#!/usr/bin/env groovy

pipeline {
    agent any

    triggers {
      pollSCM('*/5 * * * *')
    }

    stages {
        stage('SCM') {
            steps {
                git 'https://github.com/guillaume-pansier/profile.git'
            }
        }
        nodejs('npm 6.13.0') {
          stage('Build') {
		       // Run the maven build
		        sh 'npm install'
		        sh 'npm run build'
	        }
        }
    }
}
