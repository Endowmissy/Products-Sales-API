import users from '../data/users';
const auth = (req, res, next) => {
    if(users.some( a => a.email === req.headers.email)) {
       next();
    } else {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm=Authorization Required');
       return res.end('Unauthorized');
    }
};

export default auth;