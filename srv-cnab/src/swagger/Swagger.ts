import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      description: "API responsible for processing the CNAB file",
      title: "SRV CNAB",
      version: "1.0.0",
      contact: {
        name: "Desafio Dev",
        email: "jb2nascimento@gmail.com"
      },
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    basePath: "./",
    host: "localhost:3000",
    produces: ["application/json"],
    servers: [
      {
        url: "http://localhost:8080",
        description: "LOCAL server"
      }
    ],
  },
  apis: [
    "./src/api/**/*Controller.{ts,js}"
  ],

};

export default swaggerJsdoc(options);
