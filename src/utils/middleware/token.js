const axios = require('axios');

const authenticateToken = async (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1];
    var data = '';

    var config = {
      method: 'post',
      url: 'http://localhost:5000/token/validate',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: data
    };
    // eslint-disable-next-line no-unused-vars
    const decodedToken = await axios(config);
    next();
  } catch (error) {
    return response.status(401).json({ status: 401, message: 'Invalid Token' });
  }
};
module.exports = { authenticateToken };