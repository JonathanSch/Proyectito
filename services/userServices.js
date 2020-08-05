const User = require('../models/User')

module.exports = {
    findUsers : () =>User.find({is_active:true}),
    findUserById : (id) => User.findById(id),
    create : (body) => {
        const user = new User(body);
        return user.save();
    },
    modifyUser : (user, body) =>{
        Object.assign(user,body);
        return user.save();
    }
}