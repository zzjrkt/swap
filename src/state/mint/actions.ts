import { createAction } from '@reduxjs/toolkit'

export enum Field {
  CURRENCY_A = 'CURRENCY_A',
  CURRENCY_B = 'CURRENCY_B'
}

<<<<<<< HEAD
export const typeInput = createAction<{ field: Field; typedValue: string; noLiquidity: boolean }>('mint/typeInputMint')
export const resetMintState = createAction<void>('mint/resetMintState')
=======
export const typeInput = createAction<{ field: Field; typedValue: string; noLiquidity: boolean }>('typeInputMint')
export const resetMintState = createAction<void>('resetMintState')
>>>>>>> 9c8809b... first commit
