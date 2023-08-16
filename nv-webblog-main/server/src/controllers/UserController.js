module.exports = {
    //get all USER
    index (req, res) {
    res.send('เรียกผู้ใช้งานทั้งหมด')
},
//CREATE USER
create (req, res) {
    req.send('ทำการสร้างผู้ใช้ใหม่:' + JSON.stringify(req.boDY))
},
//EDIT USER,SUSPEND, ACTIVE
put(req, res) {
    req.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userID + ' : ' + JSON.stringify(req.body))
},
//delete user
remove (req, res) {
    res.send('ทำการลบผู้ใช้: '+ req.params.userID + ' : ' + JSON.stringify(req.body))
},
//get user by id

show(req,res) {
    res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userID)
}
}