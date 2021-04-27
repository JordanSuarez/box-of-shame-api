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
//   securitySchemes:
//   {
//     bearerAuth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNBZG1pbiI6bnVsbCwiaWF0IjoxNjE5NTIwNzE2fQ.9bK2_mdQXZ5hZidK2ab_0cq74uMzUkbZ_dg1ogpu71I',
//       type: 'http',
//     scheme: 'bearer',
//     bearerFormat: 'JWT',
//   },
// },
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
