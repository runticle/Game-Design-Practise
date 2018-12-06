import playerReducer from '../features/player/reducer'


describe ('player reducer', () => {


  it('should return the initial state', () => {
    expect((playerReducer(undefined, {}))).toEqual (
      {
        position: [0,0],
        spriteLocation: '0px 0px',
        direction: 'east',
        walkIndex: 0
      }
    )
  })

})
