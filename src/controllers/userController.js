/**
 * Updated by https://github.com/NguyenMinhTrungHieu author on October 14th 2024
 */
import { userService } from '~/services/userService.js'

const handleGetAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    if (users.length > 0) {
      res.status(200).json(users)
    } else {
      res.status(204).send('Không có dữ liệu.')
    }
  } catch (err) {
    res.status(500).send('Lỗi thực thi truy vấn SQL')
  }
}

const handleGetUserByEmailOrPhone = async (req, res) => {
  const { email, phone } = req.query

  try {
    // Gọi service để lấy dữ liệu
    const users = await userService.getUserByEmailOrPhone(email, phone)

    if (users.length > 0) {
      res.status(200).json(users)
    } else {
      res.status(404).send('Không tìm thấy người dùng.')
    }
  } catch (error) {
    res.status(500).send('Lỗi thực thi truy vấn SQL')
  }
}

export const userController = {
  handleGetAllUsers,
  handleGetUserByEmailOrPhone
}