export default (controllerName) => ((req, res, next) => {
  console.log(req.method + ' - ' + controllerName + ': ' + req.path);
  next();
})
