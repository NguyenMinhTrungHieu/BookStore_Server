/**
 * Updated by https://github.com/NguyenMinhTrungHieu author on October 14th 2024
 */
import { userModel } from '~/models/userModel'

const getAllUsers = async () => {
  try {
    return await userModel.getAllUsers()
  } catch (error) {
    throw new Error(error.message)
  }
}

const getUserByEmailOrPhone = async (email, phone) => {
  try {
    // Gọi đến Model để thực hiện truy vấn
    const users = await userModel.findUserByEmailOrPhone(email, phone)
    return users
  } catch (error) {
    throw new Error('Lỗi khi lấy dữ liệu người dùng.')
  }
}

export const userService = {
  getAllUsers,
  getUserByEmailOrPhone
}