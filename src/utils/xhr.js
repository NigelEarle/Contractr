// import rp from 'request-promise';

export default ({
  endpoint = '/api', // adjust for env - config
  path = '/',
  method = 'GET',
  body,
  accessToken,
}) => {
  const options = {
    method,
    uri: `http://localhost:3000${endpoint}${path}`, // adjust for env - config
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
  };

  if (accessToken) {
    options.headers['access-token'] = accessToken;
  }

  if (body) {
    options.json = true;
    options.body = { ...body };
  }

  return rp(options)
    .catch((err) => {
      console.log(err);
    });
};
