export const OAUTH_SIGN_IN_START = 'OAUTH_SIGN_IN_START';
export const OAUTH_SIGN_IN_COMPLETE = 'OAUTH_SIGN_IN_COMPLETE';
export const OAUTH_SIGN_IN_ERROR = 'OAUTH_SIGN_IN_ERROR';

export const oauthSignin = () => (
  (dispatch) => {
    console.log('DISPATCH')
    dispatch({
      type: OAUTH_SIGN_IN_START,
    });
  }
);
