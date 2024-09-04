import env from "react-dotenv";

class DeletePostController {
  constructor() {}

  async deletePost(postId) {
    const username = env.BACKEND_API_USERNAME;
    const password = env.BACKEND_API_PASSWORD;
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    const response = await fetch(`${env.BACKEND_API_DOMAIN_URL}/posts/${postId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': basicAuth
      }
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
    return response;
  }
}

export default DeletePostController;
