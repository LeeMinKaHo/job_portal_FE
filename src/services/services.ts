import { IApplication } from "@/interface/IApplication";
import { Job } from "@/pages/JobDetail";
import axios from "@/services/axios"



async function getAllJobs(page = 1, limit = 20) {
                    
    return await axios.get("/jobs", {
        params: {
            page,
            limit
        }
    });
}
async function  getOneJob (id : string) : Promise<Job> {
    return  axios.get(`/jobs/${id}`, {
        params:{
            id
        }
    })
}

async function apply(application: IApplication, file: File ) {
    const formData = new FormData();
    formData.append("file", file); // Gửi file

    Object.keys(application).forEach((key) => {
        const value = application[key as keyof IApplication]; // Lấy giá trị chính xác
        formData.append(key, typeof value === "object" ? JSON.stringify(value) : String(value)); 
    });

    return axios.post("/applications", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export {getAllJobs , getOneJob , apply}