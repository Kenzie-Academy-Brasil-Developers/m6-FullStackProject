# m6-FullStackProject - Clients and Contacts

# Instalação da API para rodar localmente

## Criação da Tabela 
- Após clonar o repositório na sua máquina, rode o comando **npm install**, para instalação das dependência. 
- Crie um banco de dados **_postgres_**, depois crie as tabelas com os comandos presentes no arquivo **createTables.sql** e crie um arquivo chamado **.env** na raiz do projeto e preencha seguindo o modelo do documento **.env.example**. 
- Rode o comando **npm run dev** para rodar a API. 
- Todos as rotas podem ser testadas importando o arquivo **Project Fullstack Beah96** no insomnia.

#

## **Rotas - /client e /login**

## Endpoints

| Método | Endpoint            | Responsabilidade                              | Autenticação              |
| ------ | ------------------  | --------------------------------------------- |---------------------------|
| POST   | /client             | Cadastrar um novo cliente                     | Não precisa de token      |
| POST   | /login              | Criar o token de autenticação para um cliente | Não precisa de token      |
| GET    | /client             | Listar todos os clientes                      | Token admin               |
| GET    | /client/:<client_id>| Listar cliente por id                         | Token do cliente ou admin |
| PATCH  | /client/:<client_id>| Atualizar cliente por id                      | Token do cliente ou admin |
| DELETE | /client/:<client_id>| Deletar cliente por id                        | Token do cliente ou admin |

## Regras da aplicação

### **POST /client**

- Deve ser possível criar um cliente enviando o seguinte através do corpo da requisição;
  | Dados de entrada:  |
  | ------------------ |
  | Body: Formato Json |

  ```json
  // Cadastrando com admin igual a true
  {
      "name": "Henry Cavill",
      "email": "henry@mail.com",
      "phone": "00000000",
      "picture":"link to the picture",
      "password": "123456",
      "admin": true
  }
  ```

  - As chaves de **picture** e **admin** não são obrigatórias;

  ### **POST /login**

- Deve ser possível criar um token enviando o seguinte através do corpo da requisição:
    
  | Dados de entrada:  |
  | ------------------ |
  | Body: Formato Json |

  ```json
  {
    "email": "henry@mail.com",
    "password": "123456"
  }
  ```

### **PATCH /client/:<client_id>**
- Deve ser possível editar um cliente enviando o seguinte através do corpo da requisição;

  | Dados de entrada:  |
  | ------------------ |
  | Body: Formato Json |

  ```json
  {
      "name": "Henry Cavill",
      "email": "henry@mail.com",
      "phone": "00000000",
      "picture":"link to the picture",
  }
  ```
- A atualização pode ser feita enviando apenas um ou mais dos campos acima. 

#

## **Rotas - /contact **

## Endpoints

| Método | Endpoint                     | Responsabilidade                     | Autenticação              |
| ------ | ---------------------------- | ------------------------------------ |---------------------------|
| POST   | /contact/client/<client_id>/ | Cadastrar um novo contato            | Token do cliente ou admin |
| GET    | /contact                     | Listar todos os contatos             | Token admin               |
| GET    | /contact/client/<client_id>/ | Listar todos os contatos             | Token admin               |
| GET    | /contact/:<contact_id>       | Listar contato por id                | Token do cliente ou admin |
| PATCH  | /contact/:<contact_id>       | Atualizar contato por id             | Token do cliente ou admin |
| DELETE | /contact/:<contact_id>       | Deletar contato por id               | Token do cliente ou admin |

## Regras da aplicação

### **POST /contact/client/<client_id>/**

- Deve ser possível criar um contato enviando o seguinte através do corpo da requisição;
  | Dados de entrada:  |
  | ------------------ |
  | Body: Formato Json |

  ```json
  {
      "name": "Chris Evans",
      "email": "chris@mail.com",
      "phone": "00000000",
      "picture":"link to the picture",
  }
  ```
- O campo **picture** é opcional

### **PATCH /contact/:<contact_id>**
- Deve ser possível editar um cliente enviando o seguinte através do corpo da requisição;

  | Dados de entrada:  |
  | ------------------ |
  | Body: Formato Json |

  ```json
  {
      "name": "Chris Hemsworth",
      "email": "hotterChris@mail.com",
      "phone": "00000000",
      "picture":"link to the picture",
  }
  ```
- A atualização pode ser feita enviando apenas um ou mais dos campos acima. 