
import env from "react-dotenv";


class CreatePostController {
    constructor(){}
    async createPost(postData){
        const username = env.BACKEND_API_USERNAME;
        const password = env.BACKEND_API_PASSWORD;
        const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
        return await fetch(env.BACKEND_API_DOMAIN_URL+'/posts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': basicAuth
            },
            body: JSON.stringify(postData),
        });
    }
}
export default CreatePostController;