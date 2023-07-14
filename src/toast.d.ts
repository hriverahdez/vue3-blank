import ToastService from './toastService'

declare module 'vue' {
  interface ComponentCustomProperties {
    $toast: typeof ToastService
  }
}

export {}
