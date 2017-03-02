
export default ({
  endpoint = '/api', // adjust for env - config
  path = '/',
  method = 'GET',
  body,
  accessToken,
}) => {
  const URL = `http://localhost:3000${endpoint}${path}`; // adjust for env - config
  const options = {
    method,
    headers: {
      'Accept': 'application/json', // eslint-disable-line
      'Content-Type': 'application/json;charset=UTF-8'
    },
  };

  if (accessToken) {
    options.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (body) {
    options.json = true;
    options.body = JSON.stringify({ ...body });
  }

  return fetch(URL, options)
    .catch(err => console.log(err));
};
