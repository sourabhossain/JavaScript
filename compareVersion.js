const compareVersion = (version1, version2) => {
  const arr1 = version1.split(".")
  const arr2 = version2.split(".")
  const len1 = arr1.length
  const len2 = arr2.length
  const minLength = Math.min(len1, len2)
  
  for (let i = 0; i < minLength; i++) {
    let diff = parseInt(arr1[i], 10) - parseInt(arr2[i], 10)
    if (diff !== 0) return diff
  }
  return len1 < len2 ? -1 : len1 > len2 ? 1 : 0
}

const v1 = '2.0.1'
const v2 = '2.1.0'
const v3 = '2.1.0'

console.log(compareVersion(v1, v2)) // -1  V1 is less than V2
console.log(compareVersion(v2, v1)) // 1  V2 is greater than v1
console.log(compareVersion(v2, v3)) // 0  V2 equals V3
