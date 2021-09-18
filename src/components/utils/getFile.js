export function getFile(allFile = [], id = "") {
  return allFile.find(file => file?.id === id)
}
