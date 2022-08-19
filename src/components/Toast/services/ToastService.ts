export interface ToastService{
    type: 'error' | 'success' | 'info' | 'warning',
    text: string
}