const menu = require("../db/model/menuModel")
class MenuCtr{
  // 查询商品列表
  async find(ctx){
   let {page = 1 ,pageSize = 2} = ctx.query
   let count = await menu.count()
   let list = await menu.find().limit(Number(pageSize)).skip((page-1)*pageSize).populate('kind',"kindName -_id")
   ctx.body={code:0,list,msg:'查询ok',count}
  }
  // 查找某一个
  async findOneById(ctx){
    let id= ctx.params.id
    let result = await menu.find({_id:id})
    if(!result){ ctx.throw(404,'商品获取失败')}
    ctx.body={code:0,msg:'商品获取成功'}
  }
  // 添加商品
  async create(ctx){
    let {name,desc,path,link,stock,putaway,price,unit,kind} = ctx.request.body 
    console.log(kind)
    let result = await menu.insertMany({name,desc,path,link,stock,putaway,price,unit,kind})
    if(!result){ ctx.throw(404,'商品添加失败')}
    ctx.body ={code:0,msg:'商品添加成功'}
  }
  async update(ctx){
    let id= ctx.params.id
    let {name,desc,path,link,stock,putaway,price,unit} = ctx.request.body 
    let result = await menu.findByIdAndUpdate(id,{name,desc,path,link,stock,putaway,price,unit} )
    if(!result){ ctx.throw(404,'商品修改失败')}
    ctx.body={code:0,msg:'商品修改成功'}
  }
  async delete(ctx){
    let id= ctx.params.id
    let result =await  menu.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'商品删除失败')}
    ctx.body={code:0,msg:'商品删除成功'}
  }
  async putaway(ctx){
    let id= ctx.params.id
    let {putaway = 0} = ctx.request.body 
    let result = await menu.findByIdAndUpdate(id,{putaway} )
    if(!result){ ctx.throw(404,'商品修改失败')}
    ctx.body={code:0,msg:'商品修改成功'}
  }
  
  
}
module.exports =new MenuCtr()
