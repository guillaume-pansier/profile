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
                checkout scm
            }
        }
    stage('fetch dependencies') {
      agent {
          docker {
            image 'node:9'
            reuseNode true
          }
      }
      steps {
          sh 'npm install'
      }
    }

    stage('Unit Tests') {
      agent {
          docker {
            image 'node:9'
            reuseNode true
          }
      }
      steps {
		      sh 'npm run test:ci'
          junit '**/test-results.xml'
      }
    }

    stage('E2E Test') {
      steps {
          script {
            def image = docker.build("profile:${env.BUILD_ID}", "-f e2e/docker/Dockerfile .")
            parallel firefox: {
            image.withRun('-e public_host=web') { web ->

                    sh """
                      counter=0
                      until [ "`docker inspect -f {{.State.Health.Status}} ${web.id}`" = "healthy" -o  "\$counter" -eq "12" ]; do
                        echo "Sleeping for next 5 seconds"
                        sleep 5
                        counter=\$((counter+1));
                      done;
                    """

                    docker.image('selenium/standalone-firefox').withRun("--link ${web.id}:web") { selenium ->
                      docker.image('node:9').inside("--link ${selenium.id}:selenium") {
                        sh 'npm run protractor -- --baseUrl=http://web:4200 --seleniumAddress=http://selenium:4444/wd/hub --browser=firefox'
                      }
                    }
                  }
            },
            chrome: {
              image.withRun('-e public_host=web') { web ->

                    sh """
                      counter=0
                      until [ "`docker inspect -f {{.State.Health.Status}} ${web.id}`" = "healthy" -o  "\$counter" -eq "12" ]; do
                        echo "Sleeping for next 5 seconds"
                        sleep 5
                        counter=\$((counter+1));
                      done;
                    """

                    docker.image('selenium/standalone-chrome').withRun("--link ${web.id}:web") { selenium ->
                      docker.image('node:9').inside("--link ${selenium.id}:selenium") {
                        sh 'npm run protractor -- --baseUrl=http://web:4200 --seleniumAddress=http://selenium:4444/wd/hub --browser=chrome'
                      }
                    }
                  }
            }
          }
      }
    }

    stage('Build') {
      agent {
          docker {
            image 'node:9'
            reuseNode true
          }
      }
      steps {
          sh 'npm run build'
      }
    }

    stage('Deploy'){
      when {
            branch 'master'
        }
      steps {
		      sh 'npm run build'
          withAWS(credentials: 's3Pass', region: 'eu-west-2') {
            s3Upload bucket: 'gpansier.com', file: 'dist'
            cfInvalidate(distribution:'E2NRH8JTSJDT9U', paths:['/*'])
          }
      }
    }
  }
}
