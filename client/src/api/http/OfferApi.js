class OfferApi {
    #_client

    constructor(client) {
        this.#_client = client
    }

    setNewOffer = async data => this.#_client.post('setNewOffer', data)
    setOfferStatus = async data => this.#_client.post('setOfferStatus', data)
    changeMark = async data => this.#_client.post('changeMark', data)

}


export default OfferApi
