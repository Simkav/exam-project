import httpClient from "./index";

class ContestApi {
    #_client

    constructor(client) {
        this.#_client = client
    }

    updateContest = async data => this.#_client.post('updateContest', data)
    downloadContestFile = async data => this.#_client.get('downloadFile/' + data.fileName)
    dataForContest = async data => this.#_client.post('dataForContest', data)
    getCustomersContests = async ({ limit, offset, contestStatus }) => this.#_client.post('getCustomersContests', {
        limit,
        offset
    }, {
        headers: {
            status: contestStatus
        }
    });
    getActiveContests = async ({
                                   offset,
                                   limit,
                                   typeIndex,
                                   contestId,
                                   industry,
                                   awardSort,
                                   ownEntries
                               }) => this.#_client.post('getAllContests', {
        offset,
        limit,
        typeIndex,
        contestId,
        industry,
        awardSort,
        ownEntries
    })
    getContestById = async ({ contestId }) => this.#_client.get('getContestById', {
        headers: {
            contestId
        }
    })
}


export default ContestApi
