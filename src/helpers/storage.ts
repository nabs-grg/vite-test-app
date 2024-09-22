export const safeStorage = (storage?: Storage) => {
  const isAvailable = () => {
    if (!storage) {
      return false
    }
    try {
      const testKey = '__random_key_we_are_not_going_to_use__'
      storage.setItem(testKey, testKey)
      const key = storage.getItem(testKey)

      if (key !== testKey) {
        throw new Error('local storage not available')
      }
      storage.removeItem(testKey)

      return true
    } catch (e) {
      return false
    }
  }

  return {
    isAvailable,
    setItem: (name: string, value: string): boolean => {
      if (!isAvailable()) {
        return false
      }

      try {
        storage?.setItem(name, value)
      } catch (e) {
        throw new Error(e as string | undefined)
      }

      return true
    },
    getItem: (name: string): string | null | undefined => {
      if (!isAvailable()) {
        return null
      }

      return storage?.getItem(name)
    },
    removeItem: (name: string): void => {
      if (!isAvailable()) return

      storage?.removeItem(name)
    },
    clear: (): void => {
      if (!isAvailable()) return

      storage?.clear()
    }
  }
}

const tryCatch = <A>(f: () => A) => {
  try {
    return f()
  } catch (e) {
    return undefined
  }
}

export const safeLocalStorage = safeStorage(tryCatch(() => window.localStorage))
export const safeSessionStorage = safeStorage(tryCatch(() => window.sessionStorage))
