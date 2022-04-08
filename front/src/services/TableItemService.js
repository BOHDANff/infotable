import {$api} from "../http";


export default class TableItemService {
    static async getAll() {
        return $api.get(`/`)
    }

    static async create(item) {
        return $api.post(`/`, item)
    }

    static async delete(id) {
        return $api.delete(`/${id}`)
    }
}