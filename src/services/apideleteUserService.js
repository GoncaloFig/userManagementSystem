import * as globalConstants from '../common/constants';

export const apiDeleteUsersService = async (id) => {
    try{
        const response = await fetch(`${globalConstants.REQRES_BASE_URL}/users/${id}`,
        {
            method: 'DELETE',
            // body: JSON.stringify({
            //     name: fname,
            //     job: job,
            //     userToken: token
            // }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        //debugger;
        if (!response.ok) {
            throw new Error('Failed to delete users');
        }

        const responseData  = await response.json();
        console.log(responseData);
        return responseData;
    }catch(error){
        console.error('Delete users error', error);
        throw error;
    };
};