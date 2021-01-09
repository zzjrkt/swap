import React from 'react'
import styled from 'styled-components'

<<<<<<< HEAD
export const BodyWrapper = styled.div`
=======
export const BodyWrapper = styled.div<{ disabled?: boolean }>`
>>>>>>> 9c8809b... first commit
  position: relative;
  max-width: 420px;
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 30px;
  padding: 1rem;
<<<<<<< HEAD
=======
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  pointer-events: ${({ disabled }) => disabled && 'none'};
>>>>>>> 9c8809b... first commit
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
<<<<<<< HEAD
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
=======
export default function AppBody({ children, disabled }: { children: React.ReactNode; disabled?: boolean }) {
  return <BodyWrapper disabled={disabled}>{children}</BodyWrapper>
>>>>>>> 9c8809b... first commit
}
