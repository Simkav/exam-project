import httpClient from "./index";

class UserApi {
    #_client

    constructor(client) {
        this.#_client = client
    }

    getTransactionHistory = async () => this.#_client.get('transactions/full-info');
    payment = async data => this.#_client.post('pay', data.formData)
    cashOut = async data => this.#_client.post('cashout', data)
    updateUser = async data => this.#_client.post('updateUser', data)

}

export default UserApi
