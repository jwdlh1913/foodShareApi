let dburl ='mongodb+srv://jwdlh:jwdlh@jwdlh-xoupz.mongodb.net/1913?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(dburl,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false });
// mongoose.set('useFindAndModify', false);
var db = mongoose.connection;
db.on('error',()=>{
  console.log("数据库连接失败")
});
db.once('open', function() {
  console.log('数据库连接成功')
})