const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A simple Express Library API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);

module.exports = specs;

// components: {
// schemas: {
//   register: {
//     properties: {
//       id: {
//         type: 'integer',
//       },
//       username: {
//         type: 'string',
//       },
//       email: {
//         type: 'string',
//       },
//       password: {
//         type: 'string',
//       },
//     },
//   },
// },
// },
