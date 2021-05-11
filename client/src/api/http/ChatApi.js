import httpClient from "./index";

class ChatApi {
    #_client

    constructor(client) {
        this.#_client = client
    }

    getPreviewChat = async data => this.#_client.post('getPreview')
    getDialog = async data => this.#_client.post('getChat', data)
    newMessage = async data => this.#_client.post('newMessage', data)
    changeChatFavorite = async data => this.#_client.post('favorite', data)
    changeChatBlock = async data => this.#_client.post('blackList', data)
    getCatalogList = async data => this.#_client.post('getCatalogs', data)
    addChatToCatalog = async data => this.#_client.post('addNewChatToCatalog', data)
    createCatalog = async data => this.#_client.post('createCatalog', data)
    deleteCatalog = async data => this.#_client.post('deleteCatalog', data)
    removeChatFromCatalog = async data => this.#_client.post('removeChatFromCatalog', data)
    changeCatalogName = async data => this.#_client.post('updateNameCatalog', data)

}

export default ChatApi
