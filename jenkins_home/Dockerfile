FROM jenkins/jenkins:lts

# Đổi sang user root để thực hiện các lệnh cần thiết
USER root

# Kiểm tra xem nhóm 'jenkins' đã tồn tại chưa
RUN getent group jenkins || groupadd -g 1000 jenkins

# Kiểm tra xem người dùng 'duyle' đã tồn tại chưa
RUN id -u duyle &>/dev/null || useradd -m -d /var/jenkins_home -u 1000 -s /bin/bash -g jenkins duyle

# Đặt mật khẩu cho người dùng 'duyle' bằng lệnh passwd
RUN echo "duyle:Duyle392002" |  passwd --stdin duyle

# Thêm người dùng 'duyle' vào nhóm 'jenkins'
RUN usermod -aG jenkins duyle

# Chuyển quyền sở hữu của thư mục Jenkins home cho người dùng 'duyle'
RUN chown -R duyle:jenkins /var/jenkins_home

# Chuyển quyền sở hữu của thư mục Jenkins installation cho người dùng 'duyle'
RUN chown -R duyle:jenkins /usr/share/jenkins/ref

# Đổi lại user thành 'duyle'
USER duyle

