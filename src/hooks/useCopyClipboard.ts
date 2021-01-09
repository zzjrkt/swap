import copy from 'copy-to-clipboard'
import { useCallback, useEffect, useState } from 'react'

export default function useCopyClipboard(timeout = 500): [boolean, (toCopy: string) => void] {
  const [isCopied, setIsCopied] = useState(false)

  const staticCopy = useCallback(text => {
    const didCopy = copy(text)
    setIsCopied(didCopy)
  }, [])

  useEffect(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false)
      }, timeout)

      return () => {
        clearTimeout(hide)
      }
    }
<<<<<<< HEAD
    return undefined
=======
    return
>>>>>>> 9c8809b... first commit
  }, [isCopied, setIsCopied, timeout])

  return [isCopied, staticCopy]
}
