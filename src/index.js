import React from 'react';
import ReactDOM from 'react-dom/client';
import { Marker } from '@googlemaps/react-wrapper'

import './index.css'

const MyApp = () => {
    return (
        <div className="App">
            <Map apiKey="AIzaSyBD6i3mFT2s3H5SA8KUCjlxRpchgJ2KA7g" />
        </div>
    )
}

function MyMarker() {
    return <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
  }

const Map = () => {
    return (
        <Map
          apiKey="AIzaSyBD6i3mFT2s3H5SA8KUCjlxRpchgJ2KA7g"
          defaultZoom={8}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultOptions={{ disableDefaultUI: true }}
        />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)

export default MyApp