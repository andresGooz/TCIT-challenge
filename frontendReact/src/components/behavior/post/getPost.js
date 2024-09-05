/*
import env from "react-dotenv";

class GetPostController {
  constructor() {}

  getPostUrl(id, postName) {
    let url = null;
    if (id) {
      url = `${env.BACKEND_API_DOMAIN_URL}/posts/id/${id}/`;
    } else if (postName) {
      url = `${env.BACKEND_API_DOMAIN_URL}/posts/name/${postName}/`;
    } else {
      throw new Error("Neither id nor name is provided.");
    }
    return url;
  }

  async getPost(id, postName) {
    const url = this.getPostUrl(id, postName);
    const username = env.BACKEND_API_USERNAME;
    const password = env.BACKEND_API_PASSWORD;
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': basicAuth
      }
    });
    if (!response.ok) {
      throw new Error('Post not found');
    }
    return await response.json();
  }
}

export default GetPostController;
*/