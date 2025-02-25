import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    transformResponse: [(response) => {
        try {
            // Parse JSON nếu có thể
            return JSON.parse(response);
        } catch (error) {
            return response; // Trả về nguyên gốc nếu không phải JSON
        }
    }],
});
instance.interceptors.response.use(response => response.data);

export default instance;
