# Usar a imagem base do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos de configuração
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta que o Vite usa
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev"]
