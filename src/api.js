import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // token for interaction with the API
  static token;

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //////////////////////////////
  /** Individual API requests */
  //////////////////////////////

  // Auth Requests

  /** Register a user. Returns JWT. */

  static async register(data) {
    let res = await this.request(`auth/register`, data, "post");
    JoblyApi.token = res.token;
    return res.token;
  }

  /** Logs in a user. Returns JWT. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    JoblyApi.token = res.token;
    return res.token;
  }

  // User Requests

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateCurrentUser(username, data) {
    let patchData = {};
    for (let field in data) {
      if (data[field].length > 0) {
        patchData[field] = data[field];
      }
    }
    let res = await this.request(`users/${username}`, patchData, "patch");
    return res.user;
  }

  // Apply to Job

  static async applyToJob(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    return res;
  }

  // Company Requests

  /** Get details on all companies. */
  static async getCompanies({ searchTerm }) {
    let endpoint = "companies";
    if (searchTerm.length) endpoint += `?name=${searchTerm}`;
    let res = await this.request(endpoint);
    return res.companies;
  }

  /** Get details on one company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // Job Requests

  /** Get details on all jobs. */
  static async getJobs({ searchTerm }) {
    let endpoint = "jobs";
    if (searchTerm.length) endpoint += `?title=${searchTerm}`;

    let res = await this.request(endpoint);
    return res.jobs;
  }

  /** Get details on one job by id. */
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
