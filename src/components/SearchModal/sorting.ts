<<<<<<< HEAD
import { Token, TokenAmount } from '@uniswap/sdk'
import { useMemo } from 'react'
=======
import { Token, TokenAmount, WETH } from '@uniswap/sdk'
import { useMemo } from 'react'
import { useActiveWeb3React } from '../../hooks'
>>>>>>> 9c8809b... first commit
import { useAllTokenBalances } from '../../state/wallet/hooks'

// compare two token amounts with highest one coming first
function balanceComparator(balanceA?: TokenAmount, balanceB?: TokenAmount) {
  if (balanceA && balanceB) {
    return balanceA.greaterThan(balanceB) ? -1 : balanceA.equalTo(balanceB) ? 0 : 1
  } else if (balanceA && balanceA.greaterThan('0')) {
    return -1
  } else if (balanceB && balanceB.greaterThan('0')) {
    return 1
  }
  return 0
}

<<<<<<< HEAD
function getTokenComparator(balances: {
  [tokenAddress: string]: TokenAmount | undefined
}): (tokenA: Token, tokenB: Token) => number {
=======
function getTokenComparator(
  weth: Token | undefined,
  balances: { [tokenAddress: string]: TokenAmount }
): (tokenA: Token, tokenB: Token) => number {
>>>>>>> 9c8809b... first commit
  return function sortTokens(tokenA: Token, tokenB: Token): number {
    // -1 = a is first
    // 1 = b is first

<<<<<<< HEAD
=======
    // sort ETH first
    if (weth) {
      if (tokenA.equals(weth)) return -1
      if (tokenB.equals(weth)) return 1
    }

>>>>>>> 9c8809b... first commit
    // sort by balances
    const balanceA = balances[tokenA.address]
    const balanceB = balances[tokenB.address]

    const balanceComp = balanceComparator(balanceA, balanceB)
    if (balanceComp !== 0) return balanceComp

<<<<<<< HEAD
    if (tokenA.symbol && tokenB.symbol) {
      // sort by symbol
      return tokenA.symbol.toLowerCase() < tokenB.symbol.toLowerCase() ? -1 : 1
    } else {
      return tokenA.symbol ? -1 : tokenB.symbol ? -1 : 0
    }
=======
    // sort by symbol
    return tokenA.symbol.toLowerCase() < tokenB.symbol.toLowerCase() ? -1 : 1
>>>>>>> 9c8809b... first commit
  }
}

export function useTokenComparator(inverted: boolean): (tokenA: Token, tokenB: Token) => number {
<<<<<<< HEAD
  const balances = useAllTokenBalances()
  const comparator = useMemo(() => getTokenComparator(balances ?? {}), [balances])
=======
  const { chainId } = useActiveWeb3React()
  const weth = WETH[chainId]
  const balances = useAllTokenBalances()
  const comparator = useMemo(() => getTokenComparator(weth, balances ?? {}), [balances, weth])
>>>>>>> 9c8809b... first commit
  return useMemo(() => {
    if (inverted) {
      return (tokenA: Token, tokenB: Token) => comparator(tokenA, tokenB) * -1
    } else {
      return comparator
    }
  }, [inverted, comparator])
}
