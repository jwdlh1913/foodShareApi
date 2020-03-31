const Router = require("koa-router");
// const authToken = require("../middlewera/autoToken")
// const authPermission = require("../middlewera/authPermissions.js")
const router = new Router({prefix:'/admin'})
const {find,
  login,
  create,
  updatePassword,
  update,
  delete:del} = require('../controllers/administratorCtr')
router.get('/',find)
router.post('/',create)
router.del('/:id',del)
router.put('/updatePassword/:id',updatePassword)
router.put('/:id',update)
router.post('/login',login)
module.exports = router