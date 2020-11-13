const average = (arr: number[]) => {
  let sum = 0
  for (const i of arr) {
    sum += i
  }
  return sum/arr.length
}

export const correlation = (arr1: number[], arr2: number[]) => {
  arr1 = arr1.filter((value, index) => !isNaN(value) && !isNaN(arr2[index]))
  arr2 = arr2.filter((value, index) => !isNaN(value) && !isNaN(arr1[index]))
  if (arr1.length === 0 || arr2.length === 0) return 0
  const up = arr1.map((value, index) => ((value-average(arr1))*(arr2[index]-average(arr2)))).reduce((acc, cur) => acc+cur)
  const down1 = Math.sqrt(arr1.map(value => ((value-average(arr1))*(value-average(arr1)))).reduce((acc, cur) => acc+cur))
  const down2 = Math.sqrt(arr2.map(value => ((value-average(arr2))*(value-average(arr2)))).reduce((acc, cur) => acc+cur))
  return up === 0? 0: up/(down1*down2)
}