import React from 'react'
import PropTypes from 'prop-types'
import {compose, withProps} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBj53EZkBY7QQ0ic45rkxCA0TIl5PP34r4&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    const {classes, dispatch, state} = props
    const {isMarkerShown, position} = state

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 22.338686, lng: 114.154515 }}
        >
            {isMarkerShown && <Marker position={{ lat: 22.338686, lng: 114.154515 }} />}
        </GoogleMap>
    )
})

MyMapComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
}
export default MyMapComponent