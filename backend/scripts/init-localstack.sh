#!/bin/bash

# Aguardar o LocalStack iniciar
echo "Aguardando LocalStack inicializar..."
sleep 10

# Configurar AWS CLI para usar LocalStack
export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
export AWS_DEFAULT_REGION=us-east-1
export AWS_ENDPOINT_URL=http://localhost:4566

# Criar bucket S3
echo "Criando bucket S3 'products-images'..."
aws --endpoint-url=http://localhost:4566 s3 mb s3://products-images

# Configurar bucket para acesso público
echo "Configurando bucket para acesso público..."
aws --endpoint-url=http://localhost:4566 s3api put-bucket-acl --bucket products-images --acl public-read

echo "Configuração do LocalStack concluída!"
