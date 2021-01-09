import React from 'react'
<<<<<<< HEAD
import { Price } from '@uniswap/sdk'
=======
import { Currency, Price } from '@uniswap/sdk'
>>>>>>> 9c8809b... first commit
import { useContext } from 'react'
import { Repeat } from 'react-feather'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components'
import { StyledBalanceMaxMini } from './styleds'

interface TradePriceProps {
  price?: Price
<<<<<<< HEAD
=======
  inputCurrency?: Currency
  outputCurrency?: Currency
>>>>>>> 9c8809b... first commit
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

<<<<<<< HEAD
export default function TradePrice({ price, showInverted, setShowInverted }: TradePriceProps) {
=======
export default function TradePrice({
  price,
  inputCurrency,
  outputCurrency,
  showInverted,
  setShowInverted
}: TradePriceProps) {
>>>>>>> 9c8809b... first commit
  const theme = useContext(ThemeContext)

  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

<<<<<<< HEAD
  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? `${price?.quoteCurrency?.symbol} per ${price?.baseCurrency?.symbol}`
    : `${price?.baseCurrency?.symbol} per ${price?.quoteCurrency?.symbol}`
=======
  const show = Boolean(inputCurrency && outputCurrency)
  const label = showInverted
    ? `${outputCurrency?.symbol} per ${inputCurrency?.symbol}`
    : `${inputCurrency?.symbol} per ${outputCurrency?.symbol}`
>>>>>>> 9c8809b... first commit

  return (
    <Text
      fontWeight={500}
      fontSize={14}
      color={theme.text2}
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      {show ? (
        <>
          {formattedPrice ?? '-'} {label}
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <Repeat size={14} />
          </StyledBalanceMaxMini>
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}
