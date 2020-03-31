const user = require("../db/model/userModel")
const { secret } = require("../config/config")
const jsonWebToken = require("jsonwebtoken")
class userCtr {
    async find(ctx) {
        let userList = await user.find()
        ctx.body = { code: 0, userList, msg: '查询ok' }
    }
    findById(ctx) {
        ctx.body = "获取某一个管理"
    }
    async create(ctx) {
        let { userName, passWord } = ctx.request.body
        let result = await user.insertMany({ userName, passWord })
        if (!result) { ctx.throw(-1, '用户添加失败') }
        ctx.body = { code: 0, msg: '用户添加成功' }
    }
    // 更改密码
    async updatePassword(ctx) {
        let id = ctx.params.id
        let { oldPassword, newPassword } = ctx.request.body
        let check = await user.findOne({ _id: id })
        if (check.passWord !== oldPassword) { return ctx.body = { code: -1, msg: '原密码不正确！' } }
        let result = await user.findByIdAndUpdate(id, { passWord: newPassword })
        if (!result) { ctx.throw(404, '密码修改失败，请重试') }
        ctx.body = { code: 0, msg: '密码修改成功' }
    }

    async update(ctx) {
        let id = ctx.params.id
        let { userName, passWord } = ctx.request.body
        let result = await user.findByIdAndUpdate(id, { userName, passWord })
        if (!result) { ctx.throw(404, '用户修改失败') }
        ctx.body = { code: 0, msg: '用户修改成功' }
    }
    async delete(ctx) {
        let id = ctx.params.id
        let result = await user.findByIdAndDelete(id)
        if (!result) { ctx.throw(404, '用户删除失败') }
        ctx.body = { code: 0, msg: '用户删除成功' }
    }
    async login(ctx) {
        let { userName, passWord } = ctx.request.body
        let userInfo = await user.findOne({ userName, passWord })
        console.log(typeof userInfo)
        if (!userInfo) { ctx.throw(404, '登录失败') }
        let token = jsonWebToken.sign({ userInfo }, secret, { expiresIn: "1d" })
        ctx.body = { code: 0, msg: '登录成功', token, id: userInfo._id }
    }

}
module.exports = new userCtr()
