import mvp from './mvpData'
import miniBoss from './miniBossData'

let DataSource = {
  debug: {
    fullName: 'debug',
    settings: {
      thumbnail: {
        position: '-64px -34px',
        size: '255%'
      },
      card: {
        position: '-58px -84px',
        size: '190%'
      }
    },
    maps: {
      debug: { respawn: [1, 1.5] }
    }
  },
  default: {
    fullName: 'default',
    settings: {
      thumbnail: {
        position: '0px 0px',
        size: '100%'
      },
      card: {
        position: '0px 0px',
        size: '100%'
      }
    },
    maps: {
      default: { respawn: [69, 420] }
    }
  },
  ...mvp,
  ...miniBoss
}

const dynamicData = (selector) => {
  return selector === 'mvp'
    ? { debug: DataSource.debug, default: DataSource.default, ...mvp }
    : { debug: DataSource.debug, default: DataSource.default, ...miniBoss }
}

export { DataSource, dynamicData }
