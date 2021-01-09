import { ChainId } from '@uniswap/sdk'
import { createStore, Store } from 'redux'
<<<<<<< HEAD
import { addPopup, ApplicationModal, removePopup, setOpenModal, updateBlockNumber } from './actions'
=======
import { addPopup, removePopup, toggleSettingsMenu, toggleWalletModal, updateBlockNumber } from './actions'
>>>>>>> 9c8809b... first commit
import reducer, { ApplicationState } from './reducer'

describe('application reducer', () => {
  let store: Store<ApplicationState>

  beforeEach(() => {
    store = createStore(reducer, {
      popupList: [],
<<<<<<< HEAD
      blockNumber: {
        [ChainId.MAINNET]: 3
      },
      openModal: null
=======
      walletModalOpen: false,
      settingsMenuOpen: false,
      blockNumber: {
        [ChainId.MAINNET]: 3
      }
>>>>>>> 9c8809b... first commit
    })
  })

  describe('addPopup', () => {
    it('adds the popup to list with a generated id', () => {
      store.dispatch(addPopup({ content: { txn: { hash: 'abc', summary: 'test', success: true } } }))
      const list = store.getState().popupList
      expect(list).toHaveLength(1)
      expect(typeof list[0].key).toEqual('string')
      expect(list[0].show).toEqual(true)
      expect(list[0].content).toEqual({ txn: { hash: 'abc', summary: 'test', success: true } })
<<<<<<< HEAD
      expect(list[0].removeAfterMs).toEqual(15000)
=======
>>>>>>> 9c8809b... first commit
    })

    it('replaces any existing popups with the same key', () => {
      store.dispatch(addPopup({ key: 'abc', content: { txn: { hash: 'abc', summary: 'test', success: true } } }))
      store.dispatch(addPopup({ key: 'abc', content: { txn: { hash: 'def', summary: 'test2', success: false } } }))
      const list = store.getState().popupList
      expect(list).toHaveLength(1)
      expect(list[0].key).toEqual('abc')
      expect(list[0].show).toEqual(true)
      expect(list[0].content).toEqual({ txn: { hash: 'def', summary: 'test2', success: false } })
<<<<<<< HEAD
      expect(list[0].removeAfterMs).toEqual(15000)
    })
  })

  describe('setOpenModal', () => {
    it('set wallet modal', () => {
      store.dispatch(setOpenModal(ApplicationModal.WALLET))
      expect(store.getState().openModal).toEqual(ApplicationModal.WALLET)
      store.dispatch(setOpenModal(ApplicationModal.WALLET))
      expect(store.getState().openModal).toEqual(ApplicationModal.WALLET)
      store.dispatch(setOpenModal(ApplicationModal.CLAIM_POPUP))
      expect(store.getState().openModal).toEqual(ApplicationModal.CLAIM_POPUP)
      store.dispatch(setOpenModal(null))
      expect(store.getState().openModal).toEqual(null)
=======
    })
  })

  describe('toggleWalletModal', () => {
    it('toggles wallet modal', () => {
      store.dispatch(toggleWalletModal())
      expect(store.getState().walletModalOpen).toEqual(true)
      store.dispatch(toggleWalletModal())
      expect(store.getState().walletModalOpen).toEqual(false)
      store.dispatch(toggleWalletModal())
      expect(store.getState().walletModalOpen).toEqual(true)
    })
  })

  describe('settingsMenuOpen', () => {
    it('toggles settings menu', () => {
      store.dispatch(toggleSettingsMenu())
      expect(store.getState().settingsMenuOpen).toEqual(true)
      store.dispatch(toggleSettingsMenu())
      expect(store.getState().settingsMenuOpen).toEqual(false)
      store.dispatch(toggleSettingsMenu())
      expect(store.getState().settingsMenuOpen).toEqual(true)
>>>>>>> 9c8809b... first commit
    })
  })

  describe('updateBlockNumber', () => {
    it('updates block number', () => {
      store.dispatch(updateBlockNumber({ chainId: ChainId.MAINNET, blockNumber: 4 }))
      expect(store.getState().blockNumber[ChainId.MAINNET]).toEqual(4)
    })
    it('no op if late', () => {
      store.dispatch(updateBlockNumber({ chainId: ChainId.MAINNET, blockNumber: 2 }))
      expect(store.getState().blockNumber[ChainId.MAINNET]).toEqual(3)
    })
    it('works with non-set chains', () => {
      store.dispatch(updateBlockNumber({ chainId: ChainId.ROPSTEN, blockNumber: 2 }))
      expect(store.getState().blockNumber).toEqual({
        [ChainId.MAINNET]: 3,
        [ChainId.ROPSTEN]: 2
      })
    })
  })

  describe('removePopup', () => {
    beforeEach(() => {
      store.dispatch(addPopup({ key: 'abc', content: { txn: { hash: 'abc', summary: 'test', success: true } } }))
    })
    it('hides the popup', () => {
      expect(store.getState().popupList[0].show).toBe(true)
      store.dispatch(removePopup({ key: 'abc' }))
      expect(store.getState().popupList).toHaveLength(1)
      expect(store.getState().popupList[0].show).toBe(false)
    })
  })
})
