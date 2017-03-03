import CONFIG from '../config/env';

export default ({
  endpoint = CONFIG.API_SERVER.ENDPOINT,
  path = '/',
  method = 'GET',
  body,
  accessToken,
}) => {
  const URL = `${CONFIG.API_SERVER.HOSTNAME}${endpoint}${path}`;
  const options = {
    method,
    headers: {
      'Accept': 'application/json', // eslint-disable-line
      'Content-Type': 'application/json;charset=UTF-8'
    },
  };

  if (accessToken) {
    options.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  if (body) {
    options.json = true;
    options.body = JSON.stringify({ ...body });
  }

  return fetch(URL, options)
    .catch(err => console.log(err));
};
