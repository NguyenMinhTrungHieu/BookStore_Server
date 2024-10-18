/**
 * Updated by https://github.com/NguyenMinhTrungHieu author on October 14th 2024
 */
import { connectToDB } from '~/config/SQL_Serverdb.js'
import sql from 'mssql2'

const getAllUsers = async () => {
  try {
    const pool = await connectToDB()
    const result = await pool.request().query('SELECT * FROM Users')
    return result
  } catch (error) {
    throw new Error('Đã xảy ra lỗi: ' + error.message)
  }
}

const findUserByEmailOrPhone = async (email, phone) => {
  const pool = await connectToDB()

  let query = 'SELECT * FROM Users WHERE '
  const queryParams = []

  // Thêm điều kiện dựa vào email hoặc phone
  if (email) {
    query += 'email = @Email'
    queryParams.push({ name: 'Email', type: sql.VarChar, value: email })
  }

  if (phone) {
    if (email) query += ' OR '
    query += 'phone = @Phone'
    queryParams.push({ name: 'Phone', type: sql.VarChar, value: phone })
  }

  try {
    const request = pool.request()
    // Gán các tham số vào truy vấn
    queryParams.forEach(param => request.input(param.name, param.type, param.value))

    // Thực hiện truy vấn
    const result = await request.query(query)
    return result // Trả về kết quả
  } catch (error) {
    throw new Error(error.message)
  }
}

export const userModel = {
  getAllUsers,
  findUserByEmailOrPhone
}