FROM ubuntu:22.04
COPY . backend/ frontend/
RUN apt-get update
RUN make /app
# CMD ["cd backend/ && docker-compose up -d && yarn", "^", "cd frontend/ && docker-compose up -d && yarn"]

FROM node:21-alpine AS builder

WORKDIR /backend

COPY /backend/package*.json ./
COPY /backend/prisma/ ./prisma
COPY /backend/.env.example /backend/.env

RUN yarn --quiet

COPY . .

RUN cd backend/ && yarn build

EXPOSE 5433
EXPOSE 3001

CMD ["yarn","--cwd", "backend/", "start:migrate:prod"]