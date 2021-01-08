const {OAuth2Client} = require('google-auth-library');
const CLIENT_GOOGLE = "500093402960-jhnvjcrdb6lc5cuo00bijd97oclgkpms.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_GOOGLE);

async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_GOOGLE,  
  }); 
  const payload = ticket.getPayload();
  return payload
}

module.exports = verify