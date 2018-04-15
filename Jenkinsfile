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
    stage('Test') {
      steps {
        def image = docker.build "profile:${env.BUILD_ID}"
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
