DO $$
BEGIN
   -- Crear esquema si no existe
   CREATE SCHEMA IF NOT EXISTS your_schema_name;

   -- Crear la tabla 'post' si no existe
   CREATE TABLE IF NOT EXISTS your_schema_name.post (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT
   );
END $$;
