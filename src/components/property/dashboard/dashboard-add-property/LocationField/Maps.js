import {
    useLoadScript,
    GoogleMap,
    MarkerF,
} from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete';
import styles from './Home.module.css';

const Home = () => {
    const [lat, setLat] = useState(27.672932021393862);
    const [lng, setLng] = useState(85.31184012689732);

    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

    const mapOptions = useMemo(
        () => ({
            disableDefaultUI: true,
            clickableIcons: false,
            scrollwheel: true,
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
        libraries: libraries,
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.homeWrapper}  >
            <div className={styles.sidebar}>
                <input
                     type="hidden"
                    name="lat"
                    id="lat"
                    value={lat}
                /> 
                <input
                    type="hidden"
                    name="lng"
                    id="lng"
                    value={lng}
                /> 
                {/* render Places Auto Complete and pass custom handler which updates the state */}
                <PlacesAutocomplete
                    onAddressSelect={(address) => {
                        getGeocode({ address: address }).then((results) => {
                            const { lat, lng } = getLatLng(results[0]);
                            setLat(lat);
                            setLng(lng);
                        }) 
                    }}
                />
            </div>
            <GoogleMap
                options={mapOptions}
                zoom={14}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '800px', height: '800px' }}
                onLoad={(map) => console.log('Map Loaded')}
            >
                <MarkerF
                    position={mapCenter}
                    onLoad={() => console.log(lat, lng)}
                />

            </GoogleMap>
        </div>
    );
};

const PlacesAutocomplete = ({
    onAddressSelect,
}) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        debounce: 300,
        cache: 86400
    });

    const renderSuggestions = () => {
        return data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
                description,
            } = suggestion;

            return (
                <li
                 
                    key={place_id}
                    onClick={() => {
                        setValue(description, false);
                        clearSuggestions();
                        onAddressSelect && onAddressSelect(description);
                    }}
                >
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });
    };

    return (
        <div  >
            <input
                id="addressMap"
                name="addressMap"
                value={value}
                className="form-control"
                disabled={!ready}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Insert Address"
            />

            {status === 'OK' && (
                <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
            )}
        </div>
    );
};

export default Home;