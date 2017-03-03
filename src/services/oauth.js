import { xhrUtil } from '../utils/';

const register = (credentials, user, provider) => {
  const {
    access_token,
  } = credentials;

  const {
    id,
    name,
    email,
  } = user;

  const userPayload = {
    name,
    email,
    token: access_token,
    picture: user.picture ? user.picture : null,
    [`${provider}_id`]: id,
  };

  return xhrUtil({
    path: '/register',
    method: 'POST',
    body: {
      ...userPayload
    }
  });
};

const logout = () => (
  xhrUtil({
  })
);

const OAuthService = {
  register,
  logout,
};

export default OAuthService;
