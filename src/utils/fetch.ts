import axios from 'axios';

export const fetch = async (url: string) => {
  const response = await axios({
    method: 'GET',
    url,
  });

  return response.data;
};
