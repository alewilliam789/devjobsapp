FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm","run","dev"]
EXPOSE 5173

