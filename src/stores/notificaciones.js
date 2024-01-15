import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useNotificacionStores = defineStore('notificacion', () => {
    const texto = ref('')
    const error = ref(false)
    const mostrar = ref(false)

    return{
        texto,
        error,
        mostrar
    }
})