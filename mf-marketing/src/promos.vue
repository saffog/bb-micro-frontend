<template>
    <div v-if="isVisible" class="investments text-3xl text-center rounded-lg border-4 border-black m-4">
        <div class="font-bold my-2">
            <h1>Ofertas</h1>
        </div>
        <div class="grid grid-cols-3 gap-4 p-4">
            <div class="rounded-lg border-2 border-black bg-white shadow">  
                
                <!--
                <ul>
                    <li v-for="item in descuentos" :key="item.id" >{{ item.text }}</li>
                </ul>
                -->
                <a href="#">
                    <img class="rounded-t-lg" src="https://media.istockphoto.com/id/673723668/es/foto/trabajadores-de-servicio-de-auto-guapo.jpg?s=1024x1024&w=is&k=20&c=vIv9xxTidrSF-d6dZCHzSS_XNK-oRGfoOq1MGs16WgU=" alt="" />
                </a>

                <div class="justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Seguro para auto</h5>
                    <p class="mb-3 font-normal text-gray-700">Adquiere el mejor seguro para tu auto con un descuento.</p>
                </div>
                <button v-on:click="$event => isVisible = !isVisible" class="my-2 px-2 rounded-full bg-red-800 text-white">X</button>
            </div>

            <div class="rounded-lg border-2 border-black">
                <a href="#">
                    <img class="rounded-t-lg" src="https://media.istockphoto.com/id/119926339/es/foto/piscina-del-complejo-tur%C3%ADstico.jpg?s=1024x1024&w=is&k=20&c=8QM7eyDV1NYnTdNNpJFpdzrS27xBY5fZoKyclbdu0iQ=" alt="" />
                </a>

                <div class="justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Fiesta Inn</h5>
                    <p class="mb-3 text-gray-700 font-extralight">Aprovecha 12 meses sin intereses al pagar con tus tarjetas de crédito .</p>
                </div>
                <button v-on:click="$event => isVisible = !isVisible" class="my-2 px-2 rounded-full bg-red-800 text-white">X</button>
                
            </div>

            <div class="rounded-lg border-2 border-black">
                <a href="#">
                    <img class="rounded-t-lg" src="https://media.istockphoto.com/id/1398697045/es/foto/la-tarjeta-de-cr%C3%A9dito-de-pl%C3%A1stico-negro-est%C3%A1-en-manos-3d-de-dos-mujeres-que-la-sostienen-desde.jpg?s=1024x1024&w=is&k=20&c=ETbj_ZAaSMFnCzywyjkxNMzGE1GopKV1Wq6oQ-dklJ8=" alt="" />
                </a>

                <div class="justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Tarjeta Black</h5>
                    <p class="mb-3 font-normal text-gray-700">Contrata la nueva tarjeta Black para obtener más beneficios.</p>
                </div>
                <button v-on:click="$event => isVisible = !isVisible" class="my-2 px-2 rounded-full bg-red-800 text-white">X</button>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'investments',
        data(){
            return {
                descuentos: [
                    { id: 1, text: 'Primer descuento'},
                    { id: 2, text: 'Segundo descuento'},
                    { id: 3, text: 'Tercer descuento'},
                ],
                isVisible: true
            }
        }
    }
</script>