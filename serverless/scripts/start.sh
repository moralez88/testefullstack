#!/bin/sh

# Aguardar o MongoDB estar disponível
echo "Aguardando MongoDB..."
while ! nc -z mongodb 27017; do
  sleep 1
done
echo "MongoDB está pronto!"

# Aguardar o LocalStack estar disponível
echo "Aguardando LocalStack..."
while ! nc -z localstack 4566; do
  sleep 1
done
echo "LocalStack está pronto!"

# Instalar dependências caso necessário
if [ ! -d "node_modules" ]; then
  echo "Instalando dependências..."
  npm install
fi

# Iniciar o servidor serverless em modo offline
echo "Iniciando Serverless Offline..."
npm run dev
