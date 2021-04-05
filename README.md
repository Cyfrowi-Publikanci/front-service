## Table of Contents:
* [Requirements]()
* [Local development]()
* [Build]()
* [Docker]()

<br/>

## Requirements:
* Node version v15.11.0 or latest
* Package manager yarn

### Clone repository

```bash
https://github.com/Cyfrowi-Publikanci/front-service.git
```

<br/>

## Local development:

### Instal required packages:

```bash
yarn install
```

### Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>

## Build:

### Build application:

```bash
yarn build
```

### Build completed successfully

```bash
λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

Done in 29.29s.
```

### Run built application:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>

## Docker:

### Build image:

```bash
sudo docker build -t front-web .
# or
docker build -t front-web .
```

### Create container:

```bash
sudo docker run -d -p 3000:3000 front-web
# or
docker run -d -p 3000:3000 front-web
```

### Show running container:

```bash
sudo docker ps
# or
docker ps
```

### Successfully created container:

```bash
sudo docker ps
# or
docker ps
```

```bash
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                    NAMES
81c657c35412   front-web   "docker-entrypoint.s…"   8 seconds ago   Up 7 seconds   0.0.0.0:3000->3000/tcp   gifted_gates
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
