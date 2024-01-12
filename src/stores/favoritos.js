import {ref, watch} from 'vue'
import {useBebidasStore} from './bebidas'
import {defineStore} from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebidas = useBebidasStore()
    const favoritos = ref([])

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const handleClickFavorito = () => {
        favoritos.value.push(bebidas.receta)
    }


    return {
        favoritos,
        handleClickFavorito
    } 
})