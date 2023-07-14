import { ref, computed } from 'vue'

type Toast = {
  /** The headline of the toast. */
  headline: string
  /** The message of the toast. */
  message?: string
  /** Indicates whether the toast should be removed automatically. */
  type?: string
  autoRemove?: boolean
  id?: string
}

const toasts = ref<Toast[]>([])

/**
 * Adds a toast to the list of toasts. Returns the unique ID of the toast.
 * @return {number} the ID of the toast which can be passed to the `remove` method.
 */
const show = (toast: Toast) => {
  const toastExists = toasts.value.includes(({ id }) => toast.id === id)
  if (toastExists) {
    return {}
  }
  toast.autoRemove = toast.autoRemove ?? true
  toasts.value.push(toast)
  return toast.id
}

/**
 * Removes a toast with the specified id from the list of toasts.
 * @function
 * @return {undefined}
 * @param {string} id - The id of the toast to be removed.
 */
const remove = (id: string) => {
  toasts.value = toasts.value.filter((toast) => toast.id !== id)
}

/**
 * Removes all toasts with autoRemove set to true from the list of toasts.
 * @function
 * @return {undefined}
 */
const autoRemove = () => {
  toasts.value = toasts.value.filter((toast) => !toast.autoRemove)
}

/** A readonly computed property that returns the current list of toasts. */
const readonlyToasts = computed(() => toasts.value)

export default { show, remove, autoRemove, toasts: readonlyToasts }
