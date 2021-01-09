<<<<<<< HEAD
import { diffTokenLists, TokenList } from '@uniswap/token-lists'
import React, { useCallback, useMemo } from 'react'
import ReactGA from 'react-ga'
import { useDispatch } from 'react-redux'
import { Text } from 'rebass'
import styled from 'styled-components'
=======
import { TokenList, Version } from '@uniswap/token-lists'
import React, { useCallback, useContext } from 'react'
import { AlertCircle, Info } from 'react-feather'
import { useDispatch } from 'react-redux'
import { ThemeContext } from 'styled-components'
>>>>>>> 9c8809b... first commit
import { AppDispatch } from '../../state'
import { useRemovePopup } from '../../state/application/hooks'
import { acceptListUpdate } from '../../state/lists/actions'
import { TYPE } from '../../theme'
<<<<<<< HEAD
import listVersionLabel from '../../utils/listVersionLabel'
import { ButtonSecondary } from '../Button'
import { AutoColumn } from '../Column'
import { AutoRow } from '../Row'

export const ChangesList = styled.ul`
  max-height: 400px;
  overflow: auto;
`
=======
import { ButtonPrimary, ButtonSecondary } from '../Button'
import { AutoColumn } from '../Column'
import { AutoRow } from '../Row'

function versionLabel(version: Version): string {
  return `v${version.major}.${version.minor}.${version.patch}`
}
>>>>>>> 9c8809b... first commit

export default function ListUpdatePopup({
  popKey,
  listUrl,
  oldList,
  newList,
  auto
}: {
  popKey: string
  listUrl: string
  oldList: TokenList
  newList: TokenList
  auto: boolean
}) {
  const removePopup = useRemovePopup()
  const removeThisPopup = useCallback(() => removePopup(popKey), [popKey, removePopup])
  const dispatch = useDispatch<AppDispatch>()
<<<<<<< HEAD

  const handleAcceptUpdate = useCallback(() => {
    if (auto) return
    ReactGA.event({
      category: 'Lists',
      action: 'Update List from Popup',
      label: listUrl
    })
=======
  const theme = useContext(ThemeContext)

  const updateList = useCallback(() => {
    if (auto) return
>>>>>>> 9c8809b... first commit
    dispatch(acceptListUpdate(listUrl))
    removeThisPopup()
  }, [auto, dispatch, listUrl, removeThisPopup])

<<<<<<< HEAD
  const { added: tokensAdded, changed: tokensChanged, removed: tokensRemoved } = useMemo(() => {
    return diffTokenLists(oldList.tokens, newList.tokens)
  }, [newList.tokens, oldList.tokens])
  const numTokensChanged = useMemo(
    () =>
      Object.keys(tokensChanged).reduce((memo, chainId: any) => memo + Object.keys(tokensChanged[chainId]).length, 0),
    [tokensChanged]
  )

  return (
    <AutoRow>
=======
  return (
    <AutoRow>
      <div style={{ paddingRight: 16 }}>
        {auto ? <Info color={theme.text2} size={24} /> : <AlertCircle color={theme.red1} size={24} />}{' '}
      </div>
>>>>>>> 9c8809b... first commit
      <AutoColumn style={{ flex: '1' }} gap="8px">
        {auto ? (
          <TYPE.body fontWeight={500}>
            The token list &quot;{oldList.name}&quot; has been updated to{' '}
<<<<<<< HEAD
            <strong>{listVersionLabel(newList.version)}</strong>.
=======
            <strong>{versionLabel(newList.version)}</strong>.
>>>>>>> 9c8809b... first commit
          </TYPE.body>
        ) : (
          <>
            <div>
<<<<<<< HEAD
              <Text>
                An update is available for the token list &quot;{oldList.name}&quot; (
                {listVersionLabel(oldList.version)} to {listVersionLabel(newList.version)}).
              </Text>
              <ChangesList>
                {tokensAdded.length > 0 ? (
                  <li>
                    {tokensAdded.map((token, i) => (
                      <React.Fragment key={`${token.chainId}-${token.address}`}>
                        <strong title={token.address}>{token.symbol}</strong>
                        {i === tokensAdded.length - 1 ? null : ', '}
                      </React.Fragment>
                    ))}{' '}
                    added
                  </li>
                ) : null}
                {tokensRemoved.length > 0 ? (
                  <li>
                    {tokensRemoved.map((token, i) => (
                      <React.Fragment key={`${token.chainId}-${token.address}`}>
                        <strong title={token.address}>{token.symbol}</strong>
                        {i === tokensRemoved.length - 1 ? null : ', '}
                      </React.Fragment>
                    ))}{' '}
                    removed
                  </li>
                ) : null}
                {numTokensChanged > 0 ? <li>{numTokensChanged} tokens updated</li> : null}
              </ChangesList>
            </div>
            <AutoRow>
              <div style={{ flexGrow: 1, marginRight: 12 }}>
                <ButtonSecondary onClick={handleAcceptUpdate}>Accept update</ButtonSecondary>
=======
              A token list update is available for the list &quot;{oldList.name}&quot; ({versionLabel(oldList.version)}{' '}
              to {versionLabel(newList.version)}).
            </div>
            <AutoRow>
              <div style={{ flexGrow: 1, marginRight: 6 }}>
                <ButtonPrimary onClick={updateList}>Update list</ButtonPrimary>
>>>>>>> 9c8809b... first commit
              </div>
              <div style={{ flexGrow: 1 }}>
                <ButtonSecondary onClick={removeThisPopup}>Dismiss</ButtonSecondary>
              </div>
            </AutoRow>
          </>
        )}
      </AutoColumn>
    </AutoRow>
  )
}
