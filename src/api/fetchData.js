export const exerciseOptions = {
    method: 'GET',
  };
  
  export const exerciseImageOptions = {
    method: 'GET',
  };
  
  export const videoOptions = {
    method: 'GET',
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  