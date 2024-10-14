/**
 * Updated by https://github.com/NguyenMinhTrungHieu author on October 14th 2024
 */

export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })

  return orderedArray
}
