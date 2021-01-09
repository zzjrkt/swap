import { createReducer } from '@reduxjs/toolkit'
import { getVersionUpgrade, VersionUpgrade } from '@uniswap/token-lists'
import { TokenList } from '@uniswap/token-lists/dist/types'
<<<<<<< HEAD
import { DEFAULT_LIST_OF_LISTS, DEFAULT_TOKEN_LIST_URL } from '../../constants/lists'
import { updateVersion } from '../global/actions'
import { acceptListUpdate, addList, fetchTokenList, removeList, selectList } from './actions'
=======
import { updateVersion } from '../user/actions'
import { acceptListUpdate, addList, fetchTokenList } from './actions'
>>>>>>> 9c8809b... first commit

export interface ListsState {
  readonly byUrl: {
    readonly [url: string]: {
      readonly current: TokenList | null
      readonly pendingUpdate: TokenList | null
      readonly loadingRequestId: string | null
      readonly error: string | null
    }
  }
<<<<<<< HEAD
  // this contains the default list of lists from the last time the updateVersion was called, i.e. the app was reloaded
  readonly lastInitializedDefaultListOfLists?: string[]
  readonly selectedListUrl: string | undefined
}

type ListState = ListsState['byUrl'][string]

const NEW_LIST_STATE: ListState = {
  error: null,
  current: null,
  loadingRequestId: null,
  pendingUpdate: null
}

type Mutable<T> = { -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U> ? U[] : T[P] }

const initialState: ListsState = {
  lastInitializedDefaultListOfLists: DEFAULT_LIST_OF_LISTS,
  byUrl: {
    ...DEFAULT_LIST_OF_LISTS.reduce<Mutable<ListsState['byUrl']>>((memo, listUrl) => {
      memo[listUrl] = NEW_LIST_STATE
      return memo
    }, {})
  },
  selectedListUrl: DEFAULT_TOKEN_LIST_URL
=======
}

const initialState: ListsState = {
  byUrl: {}
>>>>>>> 9c8809b... first commit
}

export default createReducer(initialState, builder =>
  builder
<<<<<<< HEAD
    .addCase(fetchTokenList.pending, (state, { payload: { requestId, url } }) => {
=======
    .addCase(fetchTokenList.pending, (state, { meta: { arg: url, requestId } }) => {
>>>>>>> 9c8809b... first commit
      state.byUrl[url] = {
        current: null,
        pendingUpdate: null,
        ...state.byUrl[url],
        loadingRequestId: requestId,
        error: null
      }
    })
<<<<<<< HEAD
    .addCase(fetchTokenList.fulfilled, (state, { payload: { requestId, tokenList, url } }) => {
      const current = state.byUrl[url]?.current
      const loadingRequestId = state.byUrl[url]?.loadingRequestId

      // no-op if update does nothing
      if (current) {
        const upgradeType = getVersionUpgrade(current.version, tokenList.version)
        if (upgradeType === VersionUpgrade.NONE) return
        if (loadingRequestId === null || loadingRequestId === requestId) {
          state.byUrl[url] = {
            ...state.byUrl[url],
            loadingRequestId: null,
            error: null,
            current: current,
            pendingUpdate: tokenList
          }
=======
    .addCase(fetchTokenList.fulfilled, (state, { payload: tokenList, meta: { arg: url } }) => {
      const current = state.byUrl[url]?.current

      // no-op if update does nothing
      if (current) {
        const type = getVersionUpgrade(current.version, tokenList.version)
        if (type === VersionUpgrade.NONE) return
        state.byUrl[url] = {
          ...state.byUrl[url],
          loadingRequestId: null,
          error: null,
          current: current,
          pendingUpdate: tokenList
>>>>>>> 9c8809b... first commit
        }
      } else {
        state.byUrl[url] = {
          ...state.byUrl[url],
          loadingRequestId: null,
          error: null,
          current: tokenList,
          pendingUpdate: null
        }
      }
    })
<<<<<<< HEAD
    .addCase(fetchTokenList.rejected, (state, { payload: { url, requestId, errorMessage } }) => {
=======
    .addCase(fetchTokenList.rejected, (state, { error, meta: { requestId, arg: url } }) => {
>>>>>>> 9c8809b... first commit
      if (state.byUrl[url]?.loadingRequestId !== requestId) {
        // no-op since it's not the latest request
        return
      }

      state.byUrl[url] = {
        ...state.byUrl[url],
        loadingRequestId: null,
<<<<<<< HEAD
        error: errorMessage,
=======
        error: error.message ?? 'Unknown error',
>>>>>>> 9c8809b... first commit
        current: null,
        pendingUpdate: null
      }
    })
<<<<<<< HEAD
    .addCase(selectList, (state, { payload: url }) => {
      state.selectedListUrl = url
      // automatically adds list
      if (!state.byUrl[url]) {
        state.byUrl[url] = NEW_LIST_STATE
      }
    })
    .addCase(addList, (state, { payload: url }) => {
      if (!state.byUrl[url]) {
        state.byUrl[url] = NEW_LIST_STATE
      }
    })
    .addCase(removeList, (state, { payload: url }) => {
      if (state.byUrl[url]) {
        delete state.byUrl[url]
      }
      if (state.selectedListUrl === url) {
        state.selectedListUrl = url === DEFAULT_TOKEN_LIST_URL ? Object.keys(state.byUrl)[0] : DEFAULT_TOKEN_LIST_URL
=======
    .addCase(addList, (state, { payload: url }) => {
      if (!state.byUrl[url]) {
        state.byUrl[url] = {
          loadingRequestId: null,
          pendingUpdate: null,
          current: null,
          error: null
        }
>>>>>>> 9c8809b... first commit
      }
    })
    .addCase(acceptListUpdate, (state, { payload: url }) => {
      if (!state.byUrl[url]?.pendingUpdate) {
        throw new Error('accept list update called without pending update')
      }
      state.byUrl[url] = {
        ...state.byUrl[url],
        pendingUpdate: null,
        current: state.byUrl[url].pendingUpdate
      }
    })
    .addCase(updateVersion, state => {
<<<<<<< HEAD
      // state loaded from localStorage, but new lists have never been initialized
      if (!state.lastInitializedDefaultListOfLists) {
        state.byUrl = initialState.byUrl
        state.selectedListUrl = DEFAULT_TOKEN_LIST_URL
      } else if (state.lastInitializedDefaultListOfLists) {
        const lastInitializedSet = state.lastInitializedDefaultListOfLists.reduce<Set<string>>(
          (s, l) => s.add(l),
          new Set()
        )
        const newListOfListsSet = DEFAULT_LIST_OF_LISTS.reduce<Set<string>>((s, l) => s.add(l), new Set())

        DEFAULT_LIST_OF_LISTS.forEach(listUrl => {
          if (!lastInitializedSet.has(listUrl)) {
            state.byUrl[listUrl] = NEW_LIST_STATE
          }
        })

        state.lastInitializedDefaultListOfLists.forEach(listUrl => {
          if (!newListOfListsSet.has(listUrl)) {
            delete state.byUrl[listUrl]
          }
        })
      }

      state.lastInitializedDefaultListOfLists = DEFAULT_LIST_OF_LISTS

      if (!state.selectedListUrl) {
        state.selectedListUrl = DEFAULT_TOKEN_LIST_URL
        if (!state.byUrl[DEFAULT_TOKEN_LIST_URL]) {
          state.byUrl[DEFAULT_TOKEN_LIST_URL] = NEW_LIST_STATE
        }
      }
=======
      delete state.byUrl['https://unpkg.com/@uniswap/default-token-list@latest/uniswap-default.tokenlist.json']
>>>>>>> 9c8809b... first commit
    })
)
