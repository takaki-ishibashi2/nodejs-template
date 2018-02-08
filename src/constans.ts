import { config } from './config'

export const DEVICE_UUID_LENGTH = 32
export const DEVICE_ROUTE_PATH = `/api/v${config.apiVersion}/devices`
export const DEVICE_PUT_PATH = `/api/v${config.apiVersion}/devices/:uuid/:model/:osName/:osVersion/:modifiedDate`