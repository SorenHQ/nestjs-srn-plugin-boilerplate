FROM node:20.18.0-alpine

WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm


COPY package*.json ./

RUN pnpm install

COPY . .

CMD [ "pnpm", "run", "start:dev" ]