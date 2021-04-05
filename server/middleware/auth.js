import jwt from 'jsonwebtoken';


const secret = 'test';

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // google OAuth token header is > 500
        const isCustomAuth = token.length < 500;

        let decodedData;

        // if we have token and it is ours
        if (token && isCustomAuth) {
            // verify() gives data for each specific token, since we are using secret key 'test', need to change in future dev
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.id;
        } else {
            // for google OAuth token
            decodedData = jwt.decode(token);
            // sub is for google's name for specific id that differentiates every single google user
            req.userId = decodedData?.sub;
        }

        // action (click the button) => auth middleware (next) => like controller...
        // pass action to second thing
        next();
    } catch (error) {
        console.log(error);
    }
} 

export default auth;