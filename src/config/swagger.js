/**
 * Updated by https://github.com/NguyenMinhTrungHieu author on October 14th 2024
 */
require('dotenv').config()
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const hostname = process.env.APP_HOST
const port = process.env.APP_PORT

// Định nghĩa cấu hình Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Phiên bản OpenAPI
    info: {
      title: 'API Documentation', // Tiêu đề tài liệu API
      version: '1.0.0', // Phiên bản của API
      description: 'API for an example project'
    },
    servers: [
      {
        url: `http://${hostname}:${port}` // URL của server
      }
    ]
  },
  apis: ['~/src/routes/v1/*.js'] // Vị trí file chứa mô tả API
}

// Khởi tạo Swagger Docs
const swaggerSpecs = swaggerJsdoc(swaggerOptions)

module.exports = {
  swaggerUi,
  swaggerSpecs
}
