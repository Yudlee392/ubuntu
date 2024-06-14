FROM jenkins/jenkins:lts

USER root

RUN getent group jenkins || groupadd -g 1000 jenkins

RUN id -u duyle &>/dev/null || useradd -m -d /var/jenkins_home -u 1000 -s /bin/bash -g jenkins duyle && \
    usermod --password '$6$j5pH49g6TrfM1vpf$fCIGEU.wJxeSLybvovrozv2oPHs0Fw0bULlV0FwkUZrWkKAWmS9ZbfWfIO9.aueAIKUoW3jTAGnWg/iv4re5I/' duyle

RUN usermod -aG jenkins duyle

RUN chown -R duyle:jenkins /var/jenkins_home

RUN chown -R duyle:jenkins /usr/share/jenkins/ref

USER duyle
