<template>
    <div class="values__container bg-white ">
        <div class="circles__container">
            <div class="core__values__block flex">
                
                <!-- 
                <div class="circle__wrapper">
                    <div class="circle deg-15">
                        Lor
                    </div> 
                    <div class="circle deg-45 ">
                       <h3 class="text-black font-bold text-xl pl-8">Pasión</h3> 
                       <p class="text-gray pl-8">
                        Amamos lo que hacemos. La satisfacción que nos genera el realizar un buen trabajo cada día, a través de diversas acciones que nos potencian y nos motivan a superarnos.</p>
                    </div> 
                    <div class="circle deg-60">
                        Lor 
                    </div> 
                    <div class="circle deg-345">
                        Lor 
                    </div>
                    <div class="circle deg-225">
                        Lor 
                    </div> 
                    <div class="circle deg-270">
                        Lor 
                    </div> 
                    <div class="circle deg-315">
                        Lor 
                    </div> 
                </div>
                -->
            </div>
            <div class="phrase__block flex">

            </div>
        </div>
    </div>
</template>

<style scoped>
.circle__wrapper {
   width:797.85px;
   height:797.85px;
   border-radius:51%;
   background:transparent;
   border: 0.5px solid #666666;
   position:relative;
   margin:100px;
   left: -20%;
}

.circle {
   display:block;
   position:absolute;
   top:51%;
   left:51%;
   width:16px;
   height:16px;
   margin:-51px;
   background:#19197B;
   border-radius:51%;
   text-align:center;
   line-height:100px;
}

.deg-15 {
   transform:rotate(15deg) translate(450px) rotate(-15deg)
}

.deg-45 {
   transform:rotate(46deg) translate(450px) rotate(-46deg);
}

.deg-60 {
   transform:rotate(60deg) translate(450px) rotate(-60deg);
}

.deg-345 {
   transform:rotate(345deg) translate(450px) rotate(-345deg);
}

</style>