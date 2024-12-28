const URL="https://admin.plastindia.org/api";
export async function fetchDownloadCentreCard() {
       try {
      const response = await fetch(`${URL}/download-centre-card?populate[downloadCentreCard][populate][media]=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Download Centre Card:', error);
      return null;
    }
  }

  export async function fetchNewsAndEventsList() {
       try {
      const response = await fetch(`${URL}/news-and-events?populate[media]=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching News and Events data:', error);
      return null;
    }
  }

 
  
  export async function fetchIndividualNewsAndEvents(newsSlug) {
    try {
   const response = await fetch(`${URL}/news-and-events?populate[media]=*&filters[slug][$eq]=${encodeURIComponent(newsSlug)}`, {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
     },
   });

   if (!response.ok) {
     throw new Error(`Failed to fetch data: ${response.statusText}`);
   }

   const data = await response.json();
   return data;
 } catch (error) {
   console.error('Error fetching News and Events data:', error);
   return null;
 }
}


  export async function fetchInstagramList() {
    try {
   const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=IGQWROcFo4U3ZAMNjFMbnRTLUE5SEZAzbVpZAQ2NOSXJieFdPSHhrbTlOR3dKb2Vma29XM2w2RzdSWHVKQlRLb0k5U1R1Y3o5OGJQZAHl6dVE0STFsZADg2bFpkTldIY1BEeWR4ZAXdsN1RxX0pnYmZAfWjV4SlNRTG9GZAEkZD `, {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
     },
   });

   if (!response.ok) {
     throw new Error(`Failed to fetch data: ${response.statusText}`);
   }

   const data = await response.json();
   return data;
 } catch (error) {
   console.error('Error fetching Instagram data:', error);
   return null;
 }
}


export async function fetchBlogCategories() {
  try {
 const response = await fetch(`${URL}/blog-categories`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
   },
 });

 if (!response.ok) {
   throw new Error(`Failed to fetch data: ${response.statusText}`);
 }

 const data = await response.json();
 return data;
} catch (error) {
 console.error('Error fetching Blog Categories data:', error);
 return null;
}
}

export async function fetchBlogList(CategorySlug = null) {
  try {
    const endpoint = CategorySlug
    ? `${URL}/blogs?populate[thumbnail][populate][image]=*&filters[blogCategories][CategorySlug][$eq]=${CategorySlug}&pagination[page]=1&pagination[pageSize]=10`
    : `${URL}/blogs?populate[thumbnail][populate][image]=*&pagination[page]=1&pagination[pageSize]=10`;
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Blog List:', error);
    return null;
  }
}


export async function fetchIndividualBlog(blogSlug) {
  try {
 const response = await fetch(`${URL}/blogs?populate[thumbnail][populate][image]=*&filters[slug][$eq]=${encodeURIComponent(blogSlug)}`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
   },
 });

 if (!response.ok) {
   throw new Error(`Failed to fetch data: ${response.statusText}`);
 }

 const data = await response.json();
 return data;
} catch (error) {
 console.error('Error fetching Individual Blog data:', error);
 return null;
}
}

export async function fetchImpactOfPlastics() {
  try {
 const response = await fetch(`${URL}/impact-of-plastics?populate=*`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
   },
 });

 if (!response.ok) {
   throw new Error(`Failed to fetch data: ${response.statusText}`);
 }

 const data = await response.json();
 return data;
} catch (error) {
 console.error('Error fetching Impact of Plastics data:', error);
 return null;
}
}

export const fetchPlasticDataBySlug = async (titleSlug) => {
  const apiUrl = `${URL}/impact-of-plastics?populate[media]=*&filters[titleSlug][$eq]=${encodeURIComponent(titleSlug)}`;


  console.log("Requesting API URL:", apiUrl);

  try {
      const response = await fetch(apiUrl, { method: 'GET' });

      if (!response.ok) {
          const errorDetails = await response.json();
          console.error("API Error:", errorDetails);
          return null;
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Fetch Error:", error);
      return null;
  }
};


export async function postLeadGenerationData(data) {
  try {
    const response = await fetch(`${URL}/lead-generations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}), 
    });

    if (!response.ok) {
      throw new Error(`Failed to post data: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error posting Lead Generation data:', error);
    return null;
  }
}
