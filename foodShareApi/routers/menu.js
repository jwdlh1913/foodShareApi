const KoaRouter = require("koa-router")
// const authToken = require("../middlewera/autoToken")
// const authPermission = require("../middlewera/authPermissions.js")
const router = new KoaRouter({prefix:"/goods"})
const {find,
  findOneById,
  create,
  update,
  putaway,
  delete:del} = require('../controllers/menuCtr')
  // authToken 和 authPermission 中间件删了。不然没有权限
router.get('/',find)
router.get('/:id',findOneById)
router.post('/',create)
router.del('/:id',del)
router.put('/:id',update)
router.put('/:id/putaway',putaway)
module.exports = router