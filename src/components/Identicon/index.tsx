import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'

import { useActiveWeb3React } from '../../hooks'
import Jazzicon from 'jazzicon'

<<<<<<< HEAD
const StyledIdenticonContainer = styled.div`
=======
const StyledIdenticon = styled.div`
>>>>>>> 9c8809b... first commit
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
`

export default function Identicon() {
  const ref = useRef<HTMLDivElement>()

  const { account } = useActiveWeb3React()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])

<<<<<<< HEAD
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  return <StyledIdenticonContainer ref={ref as any} />
=======
  return <StyledIdenticon ref={ref} />
>>>>>>> 9c8809b... first commit
}
