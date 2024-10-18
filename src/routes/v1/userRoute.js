/**
 * Updated by https://github.com/NguyenMinhTrungHieu author on October 14th 2024
 */
import express from 'express'
import { userController } from '~/controllers/userController'

const Router = express.Router()

Router.route('/')
  .get( userController.handleGetAllUsers )

Router.route('/search')
  .get( userController.handleGetUserByEmailOrPhone )

export const userRoutes = Router