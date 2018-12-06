import dashboardReducer from '../features/dashboard/reducer'

describe ('dashboard reducer', () => {

  it('should return the initial state', () => {
    expect((dashboardReducer(undefined, {}))).toEqual (
      {
        messageIndex: 0,
        inventory: [],
        rubies: 0
      }
    )
  })

  it('should add a ruby', () => {
    expect(
      dashboardReducer(undefined,
        {
          type: 'ADD_RUBY',
          rubies: 1
        })
      ).toEqual(
        {
          messageIndex: 0,
          inventory: [],
          rubies: 1
        }
      )
    })

  it('should send item to inventory', () => {
    expect(dashboardReducer(undefined,
      {
        type: 'SEND_TO_INVENTORY',
        payload: {
          inventory: 2
        }
      }
    )).toEqual({
      messageIndex: 0,
      inventory: [2],
      rubies: 0
    })
  })

  it('should set a message index', () => {
    expect(dashboardReducer(undefined,
      {
        type: 'SET_MESSAGE',
        payload: {
          messageIndex: 2
        }
      }
    )).toEqual({
      messageIndex: 2,
      inventory: [],
      rubies: 0
    })
  })


  }
)
