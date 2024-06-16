const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod")
const express = require('express')

const app = express()

app.use(express.json())

function verify(username,password) {
    
    const username_schema = zod.string().email({ msg : 'must be valid email address'})
    const password_schema = zod.string().min(6, {msg : 'must be atleast 6 chars'})
  

    let usename = username_schema.safeParse(username)
    let pass = password_schema.safeParse(password)
    // console.log(usename,pass)
    if (!(usename.success && pass.success)){
        //console.log('invalid output')
        return null;
    } 
    return true

    

    
}



/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {

    let logicsuccess = verify(username,password)
    // console.log(logicsuccess)
    if (logicsuccess){
        const token = jwt.sign(username,jwtPassword)
        // console.log(token)
        // console.log( 'successfully validate user')
        return token
    }

    // Your code here
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {

    try{

        jwt.verify(token,jwtPassword)
        return true
    }
    catch(e){

        return false

    }



    


    // Your code here
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    const decoded = jwt.decode(token)
    if (!decoded) {
        return false
    }
    console.log(decoded)
    return true

}


// signJwt('arjit@gmail.com','arjit123')
// console.log(decodeJwt('eyJhbGciOiJIUzI1NiJ9.YXJqaXRAZ21haWwuY29t.rbBEqPBjSTPT5Xs4zES3PcQeUFEVThani-XQl90u5BA'))


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
