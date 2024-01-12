import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {

    const handleClickFavorito = () => {
        console.log('agregando...');
    }


    return {
        handleClickFavorito
    }

})