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
      agent {
          docker { image 'node:9' }
      }
      steps {
          sh 'npm install'
		      sh 'npm run build'
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
      agent {
          docker { image 'node:9' }
      }
      steps {
          sh 'npm install'
		      sh 'npm run build'
          withAWS(credentials: 's3Pass', region: 'eu-west-2') {
            s3Upload bucket: 'gpansier.com', file: 'dist'
            cfInvalidate(distribution:'E2NRH8JTSJDT9U', paths:['/*'])
          }
      }
    }
  }
}
