FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY server/package*.json ./server/
RUN npm install
COPY server ./server
WORKDIR /app/server
RUN npx prisma generate
EXPOSE 4000
CMD ["npm", "run", "start"]
