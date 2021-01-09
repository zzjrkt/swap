import { createAction } from '@reduxjs/toolkit'

export enum Field {
  LIQUIDITY_PERCENT = 'LIQUIDITY_PERCENT',
  LIQUIDITY = 'LIQUIDITY',
  CURRENCY_A = 'CURRENCY_A',
  CURRENCY_B = 'CURRENCY_B'
}

<<<<<<< HEAD
export const typeInput = createAction<{ field: Field; typedValue: string }>('burn/typeInputBurn')
=======
export const typeInput = createAction<{ field: Field; typedValue: string }>('typeInputBurn')
>>>>>>> 9c8809b... first commit
