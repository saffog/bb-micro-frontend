<template>
    <div v-if="isVisible" class="promos text-center bg-white rounded-lg shadow-lg p-6 mb-5 max-w-max">
        <div class="font-bold">
            <h1 class="my-3 text-gray-700">Promociones</h1>
        </div>

        <div class="grid grid-cols-5 gap-5 p-3">
            <div v-for="item in descuentos" :key="item.id" class="rounded-lg bg-white shadow-lg">                  
                <img class="rounded-t-lg object-scale-down" :src="item.imagen" />

                <div class="justify-between leading-normal mt-2">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">{{ item.titulo }}</h5>
                    <p class="mb-2 text-gray-600 font-semibold p-2 text-sm tracking-wide">{{ item.texto }}</p>
                </div>
                <button v-on:click="$event => isVisible = !isVisible" class="mb-2 px-2 rounded-full bg-red-800 text-white">X</button>
            </div>            
            
        </div> 

    </div>
</template>

<script>
    export default{
        name: 'promos',
        data(){
            return {
                descuentos: [
                    { id: 1, 
                      titulo: 'Seguro auto', 
                      texto: 'Adquiere el mejor seguro para tu auto con un descuento.', 
                      imagen: 'https://media.istockphoto.com/id/673723668/es/foto/trabajadores-de-servicio-de-auto-guapo.jpg?s=1024x1024&w=is&k=20&c=vIv9xxTidrSF-d6dZCHzSS_XNK-oRGfoOq1MGs16WgU='
                    },
                    { id: 2, 
                      titulo: 'Fiesta Inn', 
                      texto: 'Aprovecha 12 meses sin intereses al pagar con tus tarjetas.', 
                      imagen: 'https://media.istockphoto.com/id/119926339/es/foto/piscina-del-complejo-tur%C3%ADstico.jpg?s=1024x1024&w=is&k=20&c=8QM7eyDV1NYnTdNNpJFpdzrS27xBY5fZoKyclbdu0iQ='
                    },
                    { id: 3, 
                      titulo: 'Tarjeta Black', 
                      texto: 'Contrata la nueva tarjeta Black para obtener más beneficios.', 
                      imagen: 'https://media.istockphoto.com/id/1398697045/es/foto/la-tarjeta-de-cr%C3%A9dito-de-pl%C3%A1stico-negro-est%C3%A1-en-manos-3d-de-dos-mujeres-que-la-sostienen-desde.jpg?s=1024x1024&w=is&k=20&c=ETbj_ZAaSMFnCzywyjkxNMzGE1GopKV1Wq6oQ-dklJ8='},
                    { id: 4, 
                      titulo: 'Compras', 
                      texto: '25% de descuento en la compra de productos participantes.', 
                      imagen: 'https://media.istockphoto.com/id/1467976868/es/foto/la-conveniencia-de-comprar-en-l%C3%ADnea.jpg?s=1024x1024&w=is&k=20&c=ihHe48-co2XSNLBk5hiYzv0UXIQOH5XF1L99WFBBwTA='
                    },
                    { id: 5, 
                      titulo: 'Viaja', 
                      texto: 'Disfruta de 18 pagos diferidos utilizando tus tarjetas.', 
                      imagen: 'https://media.istockphoto.com/id/1344771294/es/foto/familia-feliz-con-m%C3%A1scaras-disfrutando-de-viajar-juntos.jpg?s=1024x1024&w=is&k=20&c=Lotuq1DiAwy9hR0LT-ySrHebZxeRO75xPCDRT_jhQUI='
                    },
                ],
                isVisible: true
            }
        }
    }
</script>