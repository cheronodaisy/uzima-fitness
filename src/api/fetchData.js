/*export const exercise = {
    method: 'GET',
  };
  
  export const exerciseimage = {
    method: 'GET',
  };
  
  export const results = {
    method: 'GET',
  };
  */
  export const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
  
    return data;
  };
  