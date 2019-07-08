module.exports = {
    usersOnly: (req, res, next) => { 
    if (!req.session.user) {
        return res.status(401).send('Please log in');
    }
    next();
},
adminsOnly: (req, res, next) => {
    if (!res.session.user) {
        return res.status(403).send('Your are not an admin');
    }
    next();
    }

};