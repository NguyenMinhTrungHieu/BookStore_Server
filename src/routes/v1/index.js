/**
 * Updated by https://github.com/NguyenMinhTrungHieu author on October 14th 2024
 */
import express from 'express'
import { userRoutes } from './userRoute'

const Router = express.Router()

Router.use('/user', userRoutes)

export const APIs_V1 = Router