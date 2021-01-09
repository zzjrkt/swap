import { createReducer, nanoid } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { addPopup, PopupContent, removePopup, updateBlockNumber, ApplicationModal, setOpenModal } from './actions'

type PopupList = Array<{ key: string; show: boolean; content: PopupContent; removeAfterMs: number | null }>

export interface ApplicationState {
  readonly blockNumber: { readonly [chainId: number]: number }
  readonly popupList: PopupList
  readonly openModal: ApplicationModal | null
=======
import {
  addPopup,
  PopupContent,
  removePopup,
  toggleWalletModal,
  toggleSettingsMenu,
  updateBlockNumber
} from './actions'

type PopupList = Array<{ key: string; show: boolean; content: PopupContent }>

export interface ApplicationState {
  blockNumber: { [chainId: number]: number }
  popupList: PopupList
  walletModalOpen: boolean
  settingsMenuOpen: boolean
>>>>>>> 9c8809b... first commit
}

const initialState: ApplicationState = {
  blockNumber: {},
  popupList: [],
<<<<<<< HEAD
  openModal: null
=======
  walletModalOpen: false,
  settingsMenuOpen: false
>>>>>>> 9c8809b... first commit
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateBlockNumber, (state, action) => {
      const { chainId, blockNumber } = action.payload
      if (typeof state.blockNumber[chainId] !== 'number') {
        state.blockNumber[chainId] = blockNumber
      } else {
        state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId])
      }
    })
<<<<<<< HEAD
    .addCase(setOpenModal, (state, action) => {
      state.openModal = action.payload
    })
    .addCase(addPopup, (state, { payload: { content, key, removeAfterMs = 15000 } }) => {
=======
    .addCase(toggleWalletModal, state => {
      state.walletModalOpen = !state.walletModalOpen
    })
    .addCase(toggleSettingsMenu, state => {
      state.settingsMenuOpen = !state.settingsMenuOpen
    })
    .addCase(addPopup, (state, { payload: { content, key } }) => {
>>>>>>> 9c8809b... first commit
      state.popupList = (key ? state.popupList.filter(popup => popup.key !== key) : state.popupList).concat([
        {
          key: key || nanoid(),
          show: true,
<<<<<<< HEAD
          content,
          removeAfterMs
=======
          content
>>>>>>> 9c8809b... first commit
        }
      ])
    })
    .addCase(removePopup, (state, { payload: { key } }) => {
      state.popupList.forEach(p => {
        if (p.key === key) {
          p.show = false
        }
      })
    })
)
