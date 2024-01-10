import {ref, reactive, onMounted} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'
import APIService from '../services/APIService'
export const useBebidasStore = defineStore('bebidas', () => {

        const categorias = ref([])
        const busqueda = reactive({
                nombre: '',
                categoria: ''
        })

     onMounted(async function (){
        const {data: {drinks}} = await APIService.obtenerCategorias()

        categorias.value = drinks

     })

     function obtenerRecetas(){
        console.log('Consultando api');
     }

        return {
           categorias,
           busqueda,
           obtenerRecetas
        }
})