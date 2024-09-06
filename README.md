# Pasos:

1) Entrar a `TCIT-challenge/backend/database/` donde está el archivo `docker-compose.yml`:
    ```bash
    docker-compose up -d
    ```

2) Entrar a `TCIT-challenge/backend/nodeJs/` donde está el archivo `index.js`:
    - Copiar el archivo `.env.example` y renombrarlo a `.env`:
      ```bash
      cp .env.example .env
      ```
    - Instalar las dependencias y levantar el servidor:
      ```bash
      npm install
      node index.js
      ```
    El backend se desplegará en el puerto 3000.

3) Entrar a `TCIT-challenge/frontendReact/src/` donde está el archivo `index.js`:
    - Copiar el archivo `.env.example` y renombrarlo a `.env`:
      ```bash
      cp .env.example .env
      ```
    - Instalar las dependencias y levantar el servidor de desarrollo:
      ```bash
      npm install
      npm run dev
      ```
    El frontend se desplegará en el puerto 3001.
