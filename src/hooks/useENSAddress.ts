<<<<<<< HEAD
import { namehash } from 'ethers/lib/utils'
import { useMemo } from 'react'
import { useSingleCallResult } from '../state/multicall/hooks'
import isZero from '../utils/isZero'
import { useENSRegistrarContract, useENSResolverContract } from './useContract'
import useDebounce from './useDebounce'
=======
import { useEffect, useState } from 'react'
import { useActiveWeb3React } from './index'
>>>>>>> 9c8809b... first commit

/**
 * Does a lookup for an ENS name to find its address.
 */
export default function useENSAddress(ensName?: string | null): { loading: boolean; address: string | null } {
<<<<<<< HEAD
  const debouncedName = useDebounce(ensName, 200)
  const ensNodeArgument = useMemo(() => {
    if (!debouncedName) return [undefined]
    try {
      return debouncedName ? [namehash(debouncedName)] : [undefined]
    } catch (error) {
      return [undefined]
    }
  }, [debouncedName])
  const registrarContract = useENSRegistrarContract(false)
  const resolverAddress = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument)
  const resolverAddressResult = resolverAddress.result?.[0]
  const resolverContract = useENSResolverContract(
    resolverAddressResult && !isZero(resolverAddressResult) ? resolverAddressResult : undefined,
    false
  )
  const addr = useSingleCallResult(resolverContract, 'addr', ensNodeArgument)

  const changed = debouncedName !== ensName
  return {
    address: changed ? null : addr.result?.[0] ?? null,
    loading: changed || resolverAddress.loading || addr.loading
  }
=======
  const { library } = useActiveWeb3React()

  const [address, setAddress] = useState<{ loading: boolean; address: string | null }>({
    loading: false,
    address: null
  })

  useEffect(() => {
    if (!library || typeof ensName !== 'string') {
      setAddress({ loading: false, address: null })
      return
    } else {
      let stale = false
      setAddress({ loading: true, address: null })
      library
        .resolveName(ensName)
        .then(address => {
          if (!stale) {
            if (address) {
              setAddress({ loading: false, address })
            } else {
              setAddress({ loading: false, address: null })
            }
          }
        })
        .catch(() => {
          if (!stale) {
            setAddress({ loading: false, address: null })
          }
        })

      return () => {
        stale = true
      }
    }
  }, [library, ensName])

  return address
>>>>>>> 9c8809b... first commit
}
