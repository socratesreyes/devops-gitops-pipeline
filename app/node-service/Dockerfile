FROM node:20-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install


# stage2
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

