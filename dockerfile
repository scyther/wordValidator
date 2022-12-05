FROM node:alpine

WORKDIR /app

COPY . /app/

RUN npm install
RUN cd client || npm run build

ENV API_KEY='H+1UVi5ENh8kz1rBEu2vow==TBqDsgW68Icl0ZEQ' PORT=3000
EXPOSE 8000

CMD ["npm","run","start"]