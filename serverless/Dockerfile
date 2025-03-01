FROM node:18-alpine

WORKDIR /app

# Instalar ferramentas necessárias
RUN apk add --no-cache netcat-openbsd

# Instalar serverless globalmente
RUN npm install -g serverless

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências do projeto
RUN npm install

# Copiar arquivos do projeto
COPY . .

# Tornar o script de inicialização executável
RUN chmod +x ./scripts/start.sh

# Expor a porta usada pelo serverless-offline
EXPOSE 3001

# Usar o script de inicialização como ponto de entrada
CMD ["./scripts/start.sh"]
