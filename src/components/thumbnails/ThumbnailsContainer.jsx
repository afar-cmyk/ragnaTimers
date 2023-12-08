import React from "react";
import Thumbnails from './Thumbnails.jsx'

export default function ThumbnailsContainer() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', columnGap: '16px'}} >
      <div className="Mvp Portrait">
        <Thumbnails type="mvp"  mvpName='default' />
      </div>
      <div className="Map Portrait">
        <Thumbnails type="map" mapName='default' />
      </div>
    </div>
  );
}
