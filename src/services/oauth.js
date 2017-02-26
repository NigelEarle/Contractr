import { xhrUtil } from '../utils/';

const login = (accessToken, user) => {
  const {
    name,
    email,
  } = user;

  return xhrUtil({
    path: '/login',
    method: 'POST',
    accessToken,
    body: {
      name,
      email,
      picture: user.picture ? user.picture : null,
    }
  });
};

const logout = () => (
  xhrUtil({
  })
);

const OAuthService = {
  login,
  logout,
};

export default OAuthService;
