#!/bin/bash
echo "Copiando my-money-app-backend.service para /etc/systemd/system..."
sudo cp my-money-app-backend.service /etc/systemd/system/my-money-app-backend.service
echo "Iniciando serviço..."
sudo systemctl start my-money-app-backend
echo "Reinicinado serviços do sistema..."
sudo systemctl daemon-reload
echo "Para ver o log do serviço, executa: sudo journalctl -e -u my-money-app-backend"