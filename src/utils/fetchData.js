export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '10c09878e4msh622511cc7bf0ef7p1cd256jsn00055ed8fbf7',//process.env.REACT_APP_RAPID_API_KEY, 
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a31c37a35cmsh813aa312bd7f0cbp1bbf6cjsne6eaa16a165c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data = await response.json();
    return data;
}