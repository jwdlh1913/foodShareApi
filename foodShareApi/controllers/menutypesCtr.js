const menutypes = require("../db/model/menuTypesModel")
class menutypesCtr{
  // 查询商品类别列表
  async find(ctx){
    let {page = 1 ,pageSize = 5} = ctx.query
    let count = await menutypes.count()
    let list = await menutypes.find().limit(Number(pageSize)).skip((page-1)*pageSize)
    ctx.body={code:0,list,msg:'查询ok',count}
  }
  // 添加商品类别
  async create(ctx){
    let {menutypesName, classes} = ctx.request.body 
    let result = await menutypes.insertMany({menutypesName,classes})
    if(!result){ ctx.throw(404,'商品类别添加失败')}
    ctx.body ={code:0,msg:'商品类别添加成功'}
  }
  // 更新商品类别
  async update(ctx){
    let id= ctx.params.id
    let {menutypesName} = ctx.request.body 
    let result = await menutypes.findByIdAndUpdate(id,{menutypesName} )
    if(!result){ ctx.throw(404,'商品类别修改失败')}
    ctx.body={code:0,msg:'商品类别修改成功'}
  }
  // 删除商品类别
  async delete(ctx){
    let id= ctx.params.id
    let result =await  menutypes.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'商品类别删除失败')}
    ctx.body={code:0,msg:'商品类别删除成功'}
  }

}
module.exports =new menutypesCtr()
