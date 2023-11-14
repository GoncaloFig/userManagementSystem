import * as globalConstants from '../common/constants';

export const apiAllUsersService = async (page) => {
    try{
        const response = await fetch(`${globalConstants.REQRES_BASE_URL}/users?page=${page}`);
        //debugger;
        if (!response.ok) {
            throw new Error('Failed to Fetching all users');
        }

        const responseData  = await response.json();
        console.log(responseData);
        return responseData;
    }catch(error){
        console.error('Fetching all users error', error);
        throw error;
    };
};

export const apiAllUsersServiceCombinedPages = async () => {
    try {
      // Make requests for pages 1 and 2
      const responsePage1 = await fetch(`${globalConstants.REQRES_BASE_URL}/users?page=1`);
      const responsePage2 = await fetch(`${globalConstants.REQRES_BASE_URL}/users?page=2`);
  
      // Check if each request is successful
      if (!responsePage1.ok || !responsePage2.ok) {
        throw new Error('Failed to fetch data');
      }
  
      // Parse JSON from each response
      const dataPage1 = await responsePage1.json();
      const dataPage2 = await responsePage2.json();
  
      // Combine the results
      const combinedData = [...dataPage1.data, ...dataPage2.data];
  
      console.log('Combined Users Data:', combinedData);
      return combinedData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };