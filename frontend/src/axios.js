import axios from "axios";

window.axios = axios
axios.defaults.withCredentials = false
axios.defaults.baseURL = `${process.env.VUE_APP_BASE_URL}/api`
