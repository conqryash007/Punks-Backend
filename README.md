# Punks-Backend

## cd ./Documents
## SSH into the instance - *ssh ec2-user@3.109.152.162 -i ec2-instance.pem*
## View the logs - *sudo cat /var/log/messages*
## View status - *sudo systemctl status punk.service*
## Create a systemd - *sudo vim /etc/systemd/system/Punks.service*
```
[Unit]
Description=Punks Server
After=multi-user.target

[Service]
ExecStart=/usr/bin/node /home/ec2-user/Punks-Backend/server.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=my-node-server
User=ec2-user

[Install]
WantedBy=multi-user.target
```
