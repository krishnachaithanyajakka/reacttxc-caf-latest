import axios from 'axios';
import endPointUrl from './endpoint.config';


export default class MainService {
    private axiosInstance;
    private axiosPostHeader;
    private langCode:string='en';
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_apiUrl,
            withCredentials: true,
            responseType: 'json'
        });
        this.axiosPostHeader = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json, text/plain, */*'
            }
        };
        this.axiosInstance.interceptors.request.use((data) => {
            return this.transformRequestDataHandler(data);
        });
        this.axiosInstance.interceptors.response.use((data) => {
            return this.transFormResponseDataHandler(data);
        });
    }

    transformRequestDataHandler(requestData) {
        console.log("transform request data", requestData);
        if (this.langCode && requestData.url && (requestData.url.includes('/ajax/game/') ||
            requestData.url.includes('/ajax/banner/getBanners') ||
            requestData.url.includes('/ajax/promotion/getPromotions'))) {
            requestData.params = { ...requestData.params, languageId: this.langCode }
        }

        if(this.langCode && requestData.url && (requestData.url.includes('/ajax/staticPage') ||
         requestData.url.includes('/ajax/faq/'))){
            requestData.params = { ...requestData.params, lang: this.langCode } 
        }

        if(this.langCode && requestData.url && (requestData.url.includes('/ajax/launcher/getRealGames')||
        requestData.url.includes('/ajax/launcher/getFreeGames'))){
            requestData.params = { ...requestData.params, lang: this.langCode } 
        }

        return requestData;
    }

    transFormResponseDataHandler(responseData) {
        console.log("transform response data",responseData);
        return responseData;
    }

    getURLParams(data) {
        const params = new URLSearchParams();
        for (let key in data) {
            params.append(key, data[key]);
        }
        return params
    }

    get(url, params) {
        return this.axiosInstance.get(url, { params: params }).then(response => {
            return response;
        }).catch((error) => {
            if (error.response) {
                console.log("Error in get response object", error);
            } else if (error.request) {
                console.log("Error in get request object",error);
            } else {
                console.log('Error in get', error.message);
            }
        });
    }

    post(url, body) {
        return this.axiosInstance.post(url, this.getURLParams(body), this.axiosPostHeader)
            .then(response => {
                return response;
            }).catch((error) => {
                if (error.response) {
                    console.log("Error in post response object", error);
                } else if (error.request) {
                    console.log("Error in post request object",error);
                } else {
                    console.log('Error in post', error.message);
                }
            });
    }

    makeLogin = (loginRequestData) => {
        return this.post(endPointUrl.dologin_url, loginRequestData).then(response => response['data']);
    }

    getLobbyListWithGameGroups = () => {
        return this.get(endPointUrl.getLobbyGameGroups_url, { languageId: 'en' }).then(response => response['data'])
    }
    getGameGroupGames = () => {
        return this.get(endPointUrl.getGameGroupGames_url, { languageId: 'en' }).then(response => response['data']);
    }
}

