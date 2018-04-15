#!/usr/bin/env groovy

pipeline {
    agent any

    triggers {
      pollSCM('*/5 * * * *')
    }

    options {
      buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    stages {
        stage('SCM') {
            steps {
                git 'https://github.com/guillaume-pansier/profile.git'
            }
        }
    stage('Build') {
      steps {
        docker.image('node:9').inside {
          sh 'npm install'
		      sh 'npm run build'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          def image = docker.build "profile:${env.BUILD_ID}"
        }
      }
    }
    stage('Deploy'){
      when {
            branch 'master'
        }
      steps {
        withAWS(credentials: 's3 amazon', region: 'eu-west-2') {
          s3Upload bucket: 'gpansier.com', file: 'dist'
          cfInvalidate(distribution:'E2NRH8JTSJDT9U', paths:['/*'])
        }
      }
    }
  }
}
