export default (req, res, next) => {
  console.log('\n')
  console.log(new Date)
  next()
}
