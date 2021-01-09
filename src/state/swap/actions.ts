import { createAction } from '@reduxjs/toolkit'

export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT'
}

<<<<<<< HEAD
export const selectCurrency = createAction<{ field: Field; currencyId: string }>('swap/selectCurrency')
export const switchCurrencies = createAction<void>('swap/switchCurrencies')
export const typeInput = createAction<{ field: Field; typedValue: string }>('swap/typeInput')
=======
export const selectCurrency = createAction<{ field: Field; currencyId: string }>('selectCurrency')
export const switchCurrencies = createAction<void>('switchCurrencies')
export const typeInput = createAction<{ field: Field; typedValue: string }>('typeInput')
>>>>>>> 9c8809b... first commit
export const replaceSwapState = createAction<{
  field: Field
  typedValue: string
  inputCurrencyId?: string
  outputCurrencyId?: string
  recipient: string | null
<<<<<<< HEAD
}>('swap/replaceSwapState')
export const setRecipient = createAction<{ recipient: string | null }>('swap/setRecipient')
=======
}>('replaceSwapState')
export const setRecipient = createAction<{ recipient: string | null }>('setRecipient')
>>>>>>> 9c8809b... first commit
