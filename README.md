# WOC-PIM

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