import * as globalConstants from '../common/constants';

export const apiNewUserService = async ({fname, job}) => {
    try {
      const response = await fetch(`${globalConstants.REQRES_BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify({
            name: fname,
            job: job,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const responseData  = await response.json();
      console.log(responseData);
      return responseData;
    } catch (error) {
        console.error('Sign In error', error);
      throw error;
    }
  };
