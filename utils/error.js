export const handleErrors = (status, message) => {
  const err = new Error()
  err.status = status
  err.message = message
}
