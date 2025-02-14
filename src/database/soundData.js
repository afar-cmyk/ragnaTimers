const soundData = {
  respawn: [
    { label: 'Sound 1', value: 'respawn_1' },
    { label: 'Sound 2', value: 'respawn_2' },
    { label: 'Sound 3', value: 'respawn_3' }
  ],
  variable: [
    { label: 'Sound 1', value: 'variable_1' },
    { label: 'Sound 2', value: 'variable_2' },
    { label: 'Sound 3', value: 'variable_3' }
  ]
}

export default soundData

// console.log(soundData['respawn'][0].label)
// console.log(soundData['respawn'][0].value)

// const mvpContext = require.context('../sounds/', true, /\.mp3$/)
// let mvpImage = mvpContext(`../sounds/${soundData['respawn'][0].value}.mp3`)
// let prueba = new Audio(`../sounds/${soundData['respawn'][0].value}.mp3`)
// prueba.play()

// const mvpContext = require.context('../../images/mvps/', true, /\.png$/)
// let mvpImage = mvpContext(`./${mvpName}.png`)
