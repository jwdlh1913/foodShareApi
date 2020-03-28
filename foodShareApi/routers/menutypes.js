const Router = require("koa-router");
// const authToken = require("../middlewera/autoToken")
const router = new Router({prefix:'/kind'})
const {find,
  create,
  update,
  delete:del} = require('../controllers/kindsCtr')
router.get('/',find)
router.post('/',create)
router.del('/:id',del)
router.put('/:id',update)

module.exports = router