import React from "react";
import axios, {AxiosRequestConfig, Method} from "axios";

import { API_BASE_URL } from "../constants/urlConstants";

class RequestService {
    get = (url: string, isAuthRequired: boolean = false, contentType: string = "application/json") => {
        return createRequest("GET", url, null, isAuthRequired, contentType);
    };

    post = (url: string, body: any, isAuthRequired: boolean = false, contentType: string = "application/json") => {
        return createRequest("POST", url, body, isAuthRequired, contentType);
    };

    put = (url: string, body: any, isAuthRequired: boolean = false, contentType: string = "application/json") => {
        return createRequest("PUT", url, body, isAuthRequired, contentType);
    };

    delete = (url: string, isAuthRequired: boolean = false, contentType: string = "application/json") => {
        return createRequest("DELETE", url, null, isAuthRequired, contentType);
    };
}

const createRequest = async (method: Method, url: string, body: any, isAuthRequired: boolean, contentType: string) => {
    const headers = setHeader(isAuthRequired, contentType); // Get the updated headers
    try {
        const response = await axios({
            method: method,
            url: API_BASE_URL + url,
            data: body,
            headers: headers
        });
        return response;
    } catch (error) {
        // Handle error
        console.error("Request failed:", error);
        throw error;
    }
};

const setHeader = (isAuthRequired: boolean, contentType: string): AxiosRequestConfig["headers"] => {
    const headers: AxiosRequestConfig["headers"] = {};

    if (isAuthRequired) {
        headers["Authorization"] = localStorage.getItem("token");
    }
    headers["Content-Type"] = contentType;

    return headers;
};

export default new RequestService();