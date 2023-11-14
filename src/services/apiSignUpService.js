import * as globalConstants from '../common/constants';

export const apiSignUpService = async (email, password) => {
    try {
      const response = await fetch(`${globalConstants.REQRES_BASE_URL}/register`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const responseData  = await response.json();
      //Store user token using local storage
      const {token, id}  = responseData;
      localStorage.setItem('userToken', token);
      localStorage.setItem('userId', id);

      return responseData;
    } catch (error) {
        console.error('Sign In error', error);
      throw error;
    }
};
