CREATE TABLE IF NOT EXISTS "clients"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL UNIQUE,
    "password" VARCHAR(120) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "picture" VARCHAR(200),
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "clientSince" DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS "contacts"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "picture" VARCHAR(200),
    "client_id" INTEGER NOT NULL, 
    FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE
);