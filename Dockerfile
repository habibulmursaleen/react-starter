FROM node as build
WORKDIR /app
COPY package.json .
RUN npm install
# ENV REACT_APP_NAME=myname
COPY . .
CMD ["npm", "run", "dev"]

# FROM nginx
# COPY --from=build /app/build /user/share/nginx/html