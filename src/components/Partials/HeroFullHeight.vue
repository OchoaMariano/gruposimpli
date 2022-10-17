<template>
    <div class="min-h-[90vh] bg-gradient-to-r from-[#196DBD] via-[#19197B] to-[#000] flex items-center justify-center  overflow-hidden">
        <div class="max-w-5xl mx-auto py-auto absolute">
            <img class="img__back inset-0 cursor-pointer" src="../../assets/images/neon-hero-home.png" />
        </div>
            
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
            <div class="max-w-3xl mx-auto">
            <!-- Content goes here -->
                <div class="flex items-center justify-center">
                    <h1 class="text-6xl text-bold text-white text-center">Mobility &<br> Innovation.</h1>
                </div>
            </div>
        </div>
        <img class="absolute bottom-0 right-0 pb-7 pr-8 h-10" src="../../assets/images/icon-hero-home.png" />
        <img class="absolute bottom-0 pb-7 cursor-pointer btn--jump" src="../../assets/images/IconArrowHome.svg" />
    </div>
</template>
<style scoped>
.img__back {
    animation: bubble-anim 4s ease-out infinite;
}
.btn--jump:hover {
  animation: .4s jump ease infinite alternate;
}
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
@keyframes jump {
  0% {
    transform: scale(1);
    box-shadow: 0 1px 2px rgba(0,0,0,.15);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0,0,0,.1);
  }
}
@-webkit-keyframes bubble-anim {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1); }

  20% {
    -webkit-transform: scaleY(0.95) scaleX(1.05);
    transform: scaleY(0.95) scaleX(1.05); }

  48% {
    -webkit-transform: scaleY(1.1) scaleX(0.9);
    transform: scaleY(1.1) scaleX(0.9); }

  68% {
    -webkit-transform: scaleY(0.98) scaleX(1.02);
    transform: scaleY(0.98) scaleX(1.02); }

  80% {
    -webkit-transform: scaleY(1.02) scaleX(0.98);
    transform: scaleY(1.02) scaleX(0.98); }

  97%, 100% {
    -webkit-transform: scale(1);
    transform: scale(1); } 
}

@keyframes bubble-anim {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1); }

  20% {
    -webkit-transform: scaleY(0.95) scaleX(1.05);
    transform: scaleY(0.95) scaleX(1.05); }

  48% {
    -webkit-transform: scaleY(1.1) scaleX(0.9);
    transform: scaleY(1.1) scaleX(0.9); }

  68% {
    -webkit-transform: scaleY(0.98) scaleX(1.02);
    transform: scaleY(0.98) scaleX(1.02); }

  80% {
    -webkit-transform: scaleY(1.02) scaleX(0.98);
    transform: scaleY(1.02) scaleX(0.98); }

  97%, 100% {
    -webkit-transform: scale(1);
    transform: scale(1); } 
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
}
</style>