import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

if (typeof(Number.prototype.toRad) === 'undefined') {
    Number.prototype.toRad = function() {
        return this * Math.PI / 180;
    }
}

const haversine = (latitude, longitude, coordinates) => {
    const earthRadius = 6371e3
    const lat1Radians = latitude.toRad()
    const lat2Radians = coordinates.latitude.toRad()
    const deltaLat = (coordinates.latitude - latitude).toRad()
    const deltaLon = (coordinates.longitude - longitude).toRad()
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
                Math.cos(lat1Radians) * Math.cos(lat2Radians) *
                Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return earthRadius * c // metres
}

function* doRetrieveRates(action) {
    try {
        const api = () =>
            axios.get('/data.json', {
                headers: {
                    'Accept': 'application/json'
                }
            })
        const result = yield call(api)
        if (action.payload.position)
            result.data.forEach(it => {
                const fullDistance = haversine(Number(it.latitude), Number(it.longitude), action.payload.position.coords) / 1000
                it.distance = Math.round(fullDistance * 1000) / 1000
                it.noteLong = Math.round(it.noteLong * 1000) / 1000
                it.noteShort = Math.round(it.noteShort * 1000) / 1000
            })
        yield put({type: 'RDX_RETRIEVE_RATES_SUCCESS', payload: result.data})
    } catch (error) {
        yield put({type: 'RDX_RETRIEVE_RATES_FAIL'})
    }
}

export function* retrieveRatesSaga() {
    yield takeLatest('SGA_RETRIEVE_RATES', doRetrieveRates)
}