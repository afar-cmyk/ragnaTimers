import React from "react";
import Thumbnails from './Thumbnails.jsx'

export default function ThumbnailsContainer(props) {
  const { mvpName, mapName } = props;
  // TODO hacer las miniaturas reactivas conforme a la seleccion del usuario
  return (
    <div style={{display: 'flex', flexDirection: 'row', columnGap: '16px'}} >
      <div className="Mvp Portrait">
        <Thumbnails type="mvp"  mvpName={''} />
      </div>
      <div className="Map Portrait">
        <Thumbnails type="map" mapName={''} />
      </div>
    </div>
  );
}
