
import {$authHost} from "./indexApi";
export const getZach = async (Inst) => {
    const {data} = await $authHost.get('api/didgital',{params: {
            Inst
    }})
    return data
}

export const getStudents = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/students',{params: {
            Inst
    }})
    return data
}

export const getRF = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/rf',{params: {
            Inst
    }})
    return data
}

export const getNotRF = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/notrf',{params: {
            Inst
    }})
    return data
}

export const getAll = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/all',{params: {
            Inst
    }})
    return data
}

export const getAppSub = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/appsub',{params: {
            Inst
    }})
    return data
}

export const getCount = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/appcount',{params: {
            Inst
    }})
    return data
}

export const getTable = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/table',{params: {
            Inst
    }})
    return data
}

export const getFormStud = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/formstud',{params: {
            Inst
    }})
    return data
}

export const getFin = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/fin',{params: {
            Inst
    }})
    return data
}

export const getObl = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/obl',{params: {
            Inst,
        }})
    return data
}

export const getChan = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/chan',{params: {
            Inst
    }})
    return data
}

export const getAvgBall = async (Inst) => {
    const {data} = await $authHost.get('api/didgital/avg',{params: {
            Inst
    }})
    return data
}

export const getProba = async (SELECT, COUNT, GROUP, WHERE) => {
    const {data} = await $authHost.get('api/didgital/proba',{params: {
            SELECT, COUNT, GROUP, WHERE
    }})
    return data
}