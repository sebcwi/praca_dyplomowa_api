FROM node:16.4
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . ./
ENV PORT 8000
EXPOSE ${PORT}
CMD ["npm","start"]