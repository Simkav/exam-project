import axios from 'axios'
import CONSTANTS from '../../constants'
import AuthApi from './AuthApi'
import UserApi from "./UserApi";
import OfferApi from "./OfferApi";
import ChatApi from "./ChatApi";
import ContestApi from "./ContestApi";

const httpClient = axios.create({
    baseURL: CONSTANTS.BASE_URL
})

export const auth = new AuthApi(httpClient)
export const user = new UserApi(httpClient)
export const offer = new OfferApi(httpClient)
export const chat = new ChatApi(httpClient)
export const contest = new ContestApi(httpClient)

export default httpClient
