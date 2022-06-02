# WOC-frontend

front-end van onze applicatie

Standaard accounts om in te loggen:

email1, pw1 (standaard rol)

email3, pw3 (ook standaard rol)

admin, admin (admin account)

## Om de back-end te runnen:
Zorg ervoor dat de api en sql/nosql databases ook als containers runnen.
Instructies hiervoor zijn te vinden op:
https://github.com/kerimcanguney/WOC-Back-End#readme

Als de database en api containers draaien, start dan de front-end op met:

docker run -d --rm -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true --name woc-website kerimcan/woc-website

## Docker
Zorg ervoor dat de api en sql/nosql databases ook als containers runnen.
Instructies hiervoor zijn te vinden op:
https://github.com/kerimcanguney/WOC-Back-End#readme

### Pull image van DockerHub en run front-end 
docker pull kerimcan/woc-website

docker run -d --rm -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true --name woc-website kerimcan/woc-website

### Zelf maken docker image
docker build -t woc-api .

## Lokaal starten

Node.js is vereist

Om de dependencies van het project te installeren

```
C:\WOC-FRONT-END\app\    npm install
```

Om het project te starten
```
C:\WOC-FRONT-END\app\   npm start
```