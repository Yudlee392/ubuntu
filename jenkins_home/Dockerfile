FROM jenkins/jenkins:lts

USER root

RUN getent group jenkins || groupadd -g 1000 jenkins

RUN id -u duyle &>/dev/null || useradd -m -d /var/jenkins_home -u 1000 -s /bin/bash -g jenkins duyle

RUN useradd -m -p $(mkpasswd Duyle392002) duyle

RUN usermod -aG jenkins duyle

RUN chown -R duyle:jenkins /var/jenkins_home

RUN chown -R duyle:jenkins /usr/share/jenkins/ref

USER duyle