const APIURL = `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT`;

export const fetchAllPosts = async () => {
    const response = await fetch(`${APIURL}/posts`)    
    const data = await response.json();
    return data;
};

export const registerUser = async (username, password) => {
    const response = await fetch(`${APIURL}/users/register`, {
        method: "POST",
        headers : {
            'Content_Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            }
        })
    })
    const result = await response.json();
    return result;
};

export const createPost = async (postMade, token) => {
    const response = await fetch(
      `${APIURL}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: postMade,
        }),
      }
    );
    const data = await response.json();
    return data;
}
  

export const userLogin = async (username, password) => {
    const response = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            }
        })
    })
    
    const data = await response.json();
    return data;
};

export const grabData = async (token) => {
    const response = await fetch(`${APIURL}/users/me`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    
    const data = await response.json();
    return data; 
};