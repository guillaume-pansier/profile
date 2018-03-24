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
        stage('Build') {
          nodejs('npm 6.13.0') {
		       // Run the maven build
		        sh 'npm install'
		        sh 'npm run build'
	        }
        }
    }
}
