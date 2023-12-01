<template>
    <div class="investments text-3xl text-center flex">
        <div class="font-bold">
            investments
        </div>
        <div>
            <ul>
                <li v-for="item in list" :key="item.id" >{{ item.text }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'investments',
        data(){
            return {
                list: [
                    { id: 1, text: 'Primer Item'},
                    { id: 2, text: 'Segundo Item'},
                    { id: 3, text: 'Tercer Item'},
                ]
            }
        }
    }
</script>