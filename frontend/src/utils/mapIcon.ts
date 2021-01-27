import Leaflet from 'leaflet';

import Local from '../images/Local.svg'

const mapIcon = Leaflet.icon({
  iconUrl: Local,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170,2]
})

export default mapIcon