import { APIResponse } from "../../../../interfaces/api";
import { Job } from "../../../../interfaces/job";
// import { HttpClient } from "../../../../providers/http-client";
import { JobListData } from "../../common/dummy-data";

// const httpClient = new HttpClient();

const getOneJob = (id: string): Promise<APIResponse<Job | null>> => {
  const job = JobListData.find(({ _id }) => _id === id) || null;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: job,
        message: "ok",
        status: 200,
      });
    }, 1500);
  });
  // return httpClient.GET<APIResponse<Job>>(id);
};

export {
  getOneJob,
}
