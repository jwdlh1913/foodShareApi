const menutypes = require("../db/model/menuTypesModel")
class menutypesCtr{
  // 分页查询菜谱类别
  async find(ctx){
    let {page = 1 ,pageSize = 5} = ctx.query
    let count = await menutypes.countDocuments()
    let list = await menutypes.find().limit(Number(pageSize)).skip((page-1)*pageSize)
    ctx.body={code:0,list,msg:'查询ok',count}
  }
  // 查询所有菜谱类别
  async findAll(ctx){
    let count = await menutypes.countDocuments()
    let list = await menutypes.find()
    ctx.body={code:0,list,msg:'查询ok',count}
  }
  // 添加商品类别
  async create(ctx){
    let {menutypesName} = ctx.request.body 
    // 检查该类别是否存在
    let isExist = await menutypes.findOne({menutypesName})
    if(isExist){ ctx.throw(400,'类别已存在') }
    let result = await menutypes.insertMany({menutypesName})
    if(!result){ ctx.throw(404,'类别添加失败')}
    ctx.body ={code:0,msg:'类别添加成功'}
  }
  // 更新菜谱类别
  async update(ctx){
    let id= ctx.params.id
    let {menutypesName} = ctx.request.body 
    // 检查该类别是否存在
    let isExist = await menutypes.findOne({menutypesName})
    if(isExist){ ctx.throw(400,'类别已存在') }
    let result = await menutypes.findByIdAndUpdate(id,{menutypesName} )
    if(!result){ ctx.throw(404,'类别修改失败')}
    ctx.body={code:0,msg:'类别修改成功'}
  }
  // 删除菜谱类别
  async delete(ctx){
    let id= ctx.params.id
    let result =await  menutypes.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'类别删除失败')}
    ctx.body={code:0,msg:'删除成功'}
  }

}
module.exports =new menutypesCtr()
