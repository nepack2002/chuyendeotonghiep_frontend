<script setup>
    import CauHoi from './CauHoi.vue'
    import KetQua from './KetQua.vue'
</script>

<template>
    <div class="py-8 max-md:py-0">
        <div class="md:container mx-auto">
            <div class="grid grid-cols-4 gap-3 max-md:grid-cols-1 max-md:gap-0">
                <div class="col-span-3">
                    <CauHoi />
                </div>
                <div class="bg-white rounded-lg p-3 max-md:hidden">
                    <KetQua />
                </div>
            </div>   
        </div>
    </div>

</template>