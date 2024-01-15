import {ref, watch, onMounted, computed} from 'vue'
import {useBebidasStore} from './bebidas'
import {defineStore} from 'pinia'
import { useModalStore } from './modal'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebidas = useBebidasStore()
    const modal = useModalStore()
    const favoritos = ref([])

    onMounted(()=> {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }


    const existeFavorito = () => {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidas.receta.idDrink)
    }

    const eliminarFavoritos = () => {
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
    }

    const agregarFavorito = () =>  {
        favoritos.value.push(bebidas.receta)
    }


    const handleClickFavorito = () => {
        if(existeFavorito(bebidas.receta.idDrink)){
            eliminarFavoritos()
        } else{
            agregarFavorito()
        }
        modal.modal = false
    }

    const noFavoritos = computed(()=> favoritos.value.length === 0)

    return {
        favoritos,
        handleClickFavorito,
        existeFavorito,
        noFavoritos
    } 

})
