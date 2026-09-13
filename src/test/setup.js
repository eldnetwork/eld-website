import '@testing-library/jest-dom/vitest'

const localStore = new Map()

Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key) => (localStore.has(key) ? localStore.get(key) : null),
    setItem: (key, value) => {
      localStore.set(key, String(value))
    },
    removeItem: (key) => {
      localStore.delete(key)
    },
    clear: () => {
      localStore.clear()
    },
  },
})

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false
    },
  }),
})
