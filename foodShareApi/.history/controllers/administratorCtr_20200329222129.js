const administrator = require("../db/model/administratorModel")
const {secret} = require("../config/config")
const jsonWebToken = require("jsonwebtoken")
class AdministratorCtr{
  async find(ctx){
   let administratorList = await administrator.find()
   ctx.body={code:0,administratorList,msg:'查询ok'}
  }
  findById(ctx){
    ctx.body ="获取某一个管理"
  }
  async create(ctx){
    let {userName,passWord} = ctx.request.body 
    console.log
    let result = await administrator.insertMany({userName,passWord})
    if(!result){ ctx.throw(-1,'管理员添加失败')}
    ctx.body ={code:0,msg:'管理员添加成功'}
  }
  async update(ctx){
    let id= ctx.params.id
    let {userName,passWord} = ctx.request.body 
    let result = await administrator.findByIdAndUpdate(id,{userName,passWord} )
    if(!result){ ctx.throw(404,'管理员修改失败')}
    ctx.body={code:0,msg:'管理员修改成功'}
  }
  async delete(ctx){
    let id= ctx.params.id
    let result =await  administrator.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'管理员删除失败')}
    ctx.body={code:0,msg:'管理员删除成功'}
  }
  async login(ctx){
    let {userName,passWord} = ctx.request.body 
    let userInfo =await  administrator.findOne({userName,passWord})
    console.log(typeof userInfo)
    if(!userInfo){ ctx.throw(404,'登录失败')}
    let token = jsonWebToken.sign({userInfo},secret,{expiresIn:"1d"})
    ctx.body={code:0,msg:'登录成功',token}
  }
  
}
module.exports =new AdministratorCtr()
