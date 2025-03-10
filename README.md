# Full Stack E-commerce Application

Uma aplicação full stack que integra NestJS, MongoDB, ReactJS e AWS (LocalStack para S3), usando TypeScript e Docker.

## Estrutura do Projeto

```
├── backend/               # API NestJS
│   ├── src/
│   │   ├── modules/      # Módulos da aplicação
│   │   ├── config/       # Configurações
│   │   └── scripts/      # Scripts utilitários
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml    # Configuração dos containers
└── README.md
```

## Requisitos

- Docker e Docker Compose
- Node.js 18+
- npm ou yarn

## Configuração e Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd testefullstack
```

2. Configure as variáveis de ambiente:
```bash
cd backend
cp .env.example .env
```

3. Inicie os containers:
```bash
docker-compose up -d
```

4. Instale as dependências do backend:
```bash
cd backend
npm install
```

5. Execute o script de inicialização do LocalStack:
```bash
chmod +x scripts/init-localstack.sh
./scripts/init-localstack.sh
```

6. Execute o script de seed para popular o banco de dados:
```bash
npm run seed
```

## Endpoints da API

### Products
- `GET /api/products` - Lista todos os produtos
- `POST /api/products` - Cria um novo produto
- `GET /api/products/:id` - Obtém um produto específico
- `PUT /api/products/:id` - Atualiza um produto
- `DELETE /api/products/:id` - Remove um produto

### Categories
- `GET /api/categories` - Lista todas as categorias
- `POST /api/categories` - Cria uma nova categoria
- `GET /api/categories/:id` - Obtém uma categoria específica
- `PUT /api/categories/:id` - Atualiza uma categoria
- `DELETE /api/categories/:id` - Remove uma categoria

### Orders
- `GET /api/orders` - Lista todos os pedidos
- `POST /api/orders` - Cria um novo pedido
- `GET /api/orders/:id` - Obtém um pedido específico
- `PUT /api/orders/:id` - Atualiza um pedido
- `DELETE /api/orders/:id` - Remove um pedido
- `GET /api/orders/dashboard` - Obtém métricas do dashboard

## Desenvolvimento

Para iniciar o ambiente de desenvolvimento:

1. Inicie os serviços com Docker Compose:
```bash
docker-compose up -d
```

2. Inicie o backend em modo de desenvolvimento:
```bash
cd backend
npm run start:dev
```

## Testes

Para executar os testes:

```bash
cd backend
npm test
```

## Tecnologias Utilizadas

- Backend:
  - NestJS
  - MongoDB com Mongoose
  - TypeScript
  - AWS SDK (S3)
  - Class Validator
  - Docker

- Infraestrutura:
  - Docker
  - LocalStack (S3)
  - MongoDB

## Licença

Este projeto está licenciado sob a licença MIT.
#   t e s t e f u l l s t a c k  
 #   p r o j e t o f u l l s t a c k  
 