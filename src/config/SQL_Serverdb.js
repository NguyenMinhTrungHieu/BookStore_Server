/* eslint-disable no-console */
/**
 * Updated by https://github.com/NguyenMinhTrungHieu author on October 14th 2024
 */
import sql from 'mssql2'
require('dotenv').config()

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    trustServerCertificate: true, // Dùng trong môi trường local để bỏ qua SSL certificate
    enableArithAbort: true
  }
}

const connectToDB = async () => {
  try {
    const pool = await sql.connect(config)
    console.log('Kết nối thành công đến SQL Server')
    return pool
  } catch (error) {
    console.error('Lỗi kết nối SQL Server:', error)
    throw error
  }
}

export {
  connectToDB
}
