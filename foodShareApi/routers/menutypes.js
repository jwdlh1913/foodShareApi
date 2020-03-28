const Router = require("koa-router");
// const authToken = require("../middlewera/autoToken")
const router = new Router({prefix:'/menutypes'})
const {find,
  findAll,
  create,
  update,
  delete:del} = require('../controllers/menutypesCtr')
router.get('/',find)
router.get('/all',findAll)
router.post('/',create)
router.del('/:id',del)
router.put('/:id',update)

module.exports = router