INSTRUCTIONS.md

1. Pré-requisitos
 - Node.js e npm
 - Docker e docker-compose

2. Configurar variáveis de ambiente
 - Copiar .env.example para .env e ajustar se necessário
 - O .env deve conter:
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=policia_db
   NODE_ENV=development

3. Subir o PostgreSQL com Docker
 - Executar:
   docker-compose up -d

4. Instalar dependências
 - Executar:
   npm install

5. Executar migrations
 - Executar:
   npm run migrate
 - Caso queira resetar:
   npm run migrate:rollback

6. Executar seeds
 - Executar:
   npm run seed

7. Rodar a aplicação
 - Em desenvolvimento:
   npm run dev
 - Em produção:
   npm start

8. Script de reset do banco
 - Existe um script npm chamado db:reset que derruba volumes, sobe o container e aplica migrations e seeds:
   npm run db:reset

9. Endpoints principais
 - Agentes:
   GET /agentes
   GET /agentes/:id
   POST /agentes
   PUT /agentes/:id
   PATCH /agentes/:id
   DELETE /agentes/:id
   GET /agentes/:id/casos

 - Casos:
   GET /casos
   GET /casos/:id
   POST /casos
   PUT /casos/:id
   PATCH /casos/:id
   DELETE /casos/:id
   GET /casos/:caso_id/agente

10. Notas
 - IDs são numéricos e gerenciados pelo banco (não envie id no payload ao criar recursos).
 - Campos obrigatórios e validações seguem as regras do enunciado.
