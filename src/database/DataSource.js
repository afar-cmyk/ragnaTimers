let DataSource = {
  atroce: {
    fullName: 'Atroce',
    settings: {
      thumbnail: {
        position: '-23px -4px',
        size: '201%'
      },
      card: {
        position: '2px -30px',
        size: '130%'
      }
    },
    maps: {
      ra_fild02: { respawn: [240, 250] },
      ra_fild03: { respawn: [180, 190] },
      ra_fild04: { respawn: [300, 310] },
      ve_fild01: { respawn: [180, 190] },
      ve_fild02: { respawn: [360, 370] }
    }
  },
  garm: {
    fullName: 'Garm',
    settings: {
      thumbnail: {
        position: '0px -18px',
        size: '195%'
      },
      card: {
        position: '14px -38px',
        size: '131%'
      }
    },
    maps: {
      xmas_fild01: { respawn: [120, 130] }
    }
  },
  gtb: {
    fullName: 'Golden Thief Bug',
    settings: {
      thumbnail: {
        position: '-3px 12px',
        size: '110%'
      },
      card: {
        position: '0px 11px',
        size: '100%'
      }
    },
    maps: {
      prt_sewb4: { respawn: [60, 70] }
    }
  },
  randgris: {
    fullName: 'Valkyrie Randgris',
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
      odin_tem03: { respawn: [480, 490] }
    }
  },
  ungoliant: {
    fullName: 'Ungoliant',
    settings: {
      thumbnail: {
        position: '-11px -20px',
        size: '170%'
      },
      card: {
        position: '-11px -30px',
        size: '130%'
      }
    },
    maps: {
      ein_dun01: { respawn: [60, 110] },
      ein_fild02: { respawn: [1260, 2510] },
      ein_fild07: { respawn: [1440, 2873] }
    }
  },
  amonra: {
    fullName: 'Amon Ra',
    settings: {
      thumbnail: {
        position: '-3px -26px',
        size: '150%'
      },
      card: {
        position: '6px -60px',
        size: '100%'
      }
    },
    maps: {
      moc_pryd06: { respawn: [60, 70] }
    }
  },
  pharaoh: {
    fullName: 'Pharaoh',
    settings: {
      thumbnail: {
        position: '11px -21px',
        size: '70%'
      },
      card: {
        position: '69px -74px',
        size: '46%'
      }
    },
    maps: {
      in_sphinx5: { respawn: [60, 70] }
    }
  },
  maya: {
    fullName: 'Maya',
    settings: {
      thumbnail: {
        position: '-18px -23px',
        size: '220%'
      },
      card: {
        position: '30px -58px',
        size: '120%'
      }
    },
    maps: {
      anthell02: { respawn: [120, 130] }
    }
  },
  drake: {
    fullName: 'Drake',
    settings: {
      thumbnail: {
        position: '-6px -23px',
        size: '120%'
      },
      card: {
        position: '63px -41px',
        size: '70%'
      }
    },
    maps: {
      treasure02: { respawn: [120, 130] }
    }
  },

  // default & debug settings
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
      debug: { respawn: [1, 2] }
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
  }
}

export default DataSource
