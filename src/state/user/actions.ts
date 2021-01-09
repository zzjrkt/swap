import { createAction } from '@reduxjs/toolkit'

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
}

export interface SerializedPair {
  token0: SerializedToken
  token1: SerializedToken
}

<<<<<<< HEAD
export const updateMatchesDarkMode = createAction<{ matchesDarkMode: boolean }>('user/updateMatchesDarkMode')
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('user/updateUserDarkMode')
export const updateUserExpertMode = createAction<{ userExpertMode: boolean }>('user/updateUserExpertMode')
export const updateUserSlippageTolerance = createAction<{ userSlippageTolerance: number }>(
  'user/updateUserSlippageTolerance'
)
export const updateUserDeadline = createAction<{ userDeadline: number }>('user/updateUserDeadline')
export const addSerializedToken = createAction<{ serializedToken: SerializedToken }>('user/addSerializedToken')
export const removeSerializedToken = createAction<{ chainId: number; address: string }>('user/removeSerializedToken')
export const addSerializedPair = createAction<{ serializedPair: SerializedPair }>('user/addSerializedPair')
export const removeSerializedPair = createAction<{ chainId: number; tokenAAddress: string; tokenBAddress: string }>(
  'user/removeSerializedPair'
)
export const toggleURLWarning = createAction<void>('app/toggleURLWarning')
=======
export const updateVersion = createAction<void>('updateVersion')
export const updateMatchesDarkMode = createAction<{ matchesDarkMode: boolean }>('updateMatchesDarkMode')
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('updateUserDarkMode')
export const updateUserExpertMode = createAction<{ userExpertMode: boolean }>('updateUserExpertMode')
export const updateUserSlippageTolerance = createAction<{ userSlippageTolerance: number }>(
  'updateUserSlippageTolerance'
)
export const updateUserDeadline = createAction<{ userDeadline: number }>('updateUserDeadline')
export const addSerializedToken = createAction<{ serializedToken: SerializedToken }>('addSerializedToken')
export const removeSerializedToken = createAction<{ chainId: number; address: string }>('removeSerializedToken')
export const addSerializedPair = createAction<{ serializedPair: SerializedPair }>('addSerializedPair')
export const removeSerializedPair = createAction<{ chainId: number; tokenAAddress: string; tokenBAddress: string }>(
  'removeSerializedPair'
)
export const dismissTokenWarning = createAction<{ chainId: number; tokenAddress: string }>('dismissTokenWarning')
>>>>>>> 9c8809b... first commit
