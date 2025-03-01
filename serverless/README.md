# Configuração Serverless do Projeto Fullstack

Este diretório contém a configuração serverless para deploy da aplicação na AWS Lambda.

## Pré-requisitos

- Node.js >= 18.x
- AWS CLI configurado com suas credenciais
- Serverless Framework instalado globalmente (`npm install -g serverless`)

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- Preencha as variáveis com seus valores

```bash
cp .env.example .env
```

3. Configure suas credenciais AWS:
```bash
aws configure
```

## Comandos Disponíveis

- Executar localmente:
```bash
npm run dev
```

- Deploy para AWS:
```bash
npm run deploy
```

- Remover da AWS:
```bash
npm run remove
```

## Estrutura de Arquivos

- `serverless.yml` - Configuração principal do Serverless Framework
- `src/lambda.ts` - Ponto de entrada da aplicação para AWS Lambda
- `tsconfig.json` - Configuração do TypeScript
- `.env` - Variáveis de ambiente (não versionado)
- `.env.example` - Exemplo de variáveis de ambiente necessárias

## Endpoints

A API estará disponível nos seguintes endpoints após o deploy:

- Categories: `/categories`
- Products: `/products`
- Orders: `/orders`

Todos os endpoints suportam operações CRUD completas.

## Ambiente Local

Para testar localmente, o serverless-offline será executado na porta 3001:

```bash
npm run dev
```

## Logs

Para visualizar os logs em produção:
```bash
serverless logs -f api
