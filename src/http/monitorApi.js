import {$authHost} from "./indexApi";
export const getZach = async (zach) => {
    const {data} = await $authHost.get('api/monitor',zach)
    return data
}

export const getStudents = async (zach) => {
    const {data} = await $authHost.get('api/monitor/students',zach)
    return data
}

export const getRF = async (zach) => {
    const {data} = await $authHost.get('api/monitor/rf',zach)
    return data
}

export const getNotRF = async (zach) => {
    const {data} = await $authHost.get('api/monitor/notrf',zach)
    return data
}

export const getAll = async (zach) => {
    const {data} = await $authHost.get('api/monitor/all',zach)
    return data
}

export const getAppSub = async (zach) => {
    const {data} = await $authHost.get('api/monitor/appsub',zach)
    return data
}

export const getCount = async (zach) => {
    const {data} = await $authHost.get('api/monitor/appcount',zach)
    return data
}

export const getTable = async (zach) => {
    const {data} = await $authHost.get('api/monitor/table',zach)
    return data
}

export const getFormStud = async (zach) => {
    const {data} = await $authHost.get('api/monitor/formstud',zach)
    return data
}

export const getFin = async (zach) => {
    const {data} = await $authHost.get('api/monitor/fin',zach)
    return data
}

export const getObl = async (zach) => {
    const {data} = await $authHost.get('api/monitor/obl',zach)
    return data
}

export const getChan = async (zach) => {
    const {data} = await $authHost.get('api/monitor/chan',zach)
    return data
}

export const getAvgBall = async (zach) => {
    const {data} = await $authHost.get('api/monitor/avg',zach)
    return data
}

export const getOrig = async (zach) => {
    const {data} = await $authHost.get('api/monitor/orig',zach)
    return data
}

export const getAllObl = async (zach) => {
    const {data} = await $authHost.get('api/monitor/allobl',zach)
    return data
}