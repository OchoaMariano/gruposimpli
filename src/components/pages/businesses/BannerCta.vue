<template>
    <div class="w-full">
        <div class="content__img flex py-28 justify-center">
            <div class="img__back absolute inset-0">
                <img src="../../../assets/images/back_banner_bss.jpg" class="object-cover w-full h-full" />
            </div>
            <div class="grid grid-cols-1 grid-rows-1 items-center justify-center">
                <div class="shape__animate grid col-start-0 col-end-1 row-start-1 row-end-1 justify-center">
                    <div class="relative w-full max-w-sm">
                        <div class="bg-primaryBlue rounded-full overflow-hidden h-48 w-48">
                            <div
                            class="absolute -top-6 left-16 w-40 h-40 bg-[#191943] rounded-full filter blur-2xl opacity-90 animate-blob animation-delay-4000">
                            </div>
                            <div
                            class="absolute -bottom-16 -left-1 w-40 h-40 bg-[#E0BA30] rounded-full filter blur-2xl opacity-90 animate-blob animation-delay-2000">
                            </div>
                            <div
                            class="absolute top-0 -left-16 w-40 h-40 bg-[#19C0FC] rounded-full filter blur-2xl opacity-90 animate-blob">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text__content col-start-0 col-end-1 row-start-1 row-end-1 z-[2] justify-center">
                    <h3 class="text-white text-center text-4xl font-bold">
                        {{ $t('Businesses.brands.banner.title') }}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>