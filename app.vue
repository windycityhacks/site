<template>
    <Head>
        <Title>Windy City Hacks – Chicagoland’s high school hackathon</Title>
        <Link rel="icon" href="/favicon.ico" />
        <Meta name="description" content="Windy City Hacks is a free two-day event for programmers, artists, designers, & other high schoolers in the Chicagoland area to come together and build apps & games." />
    </Head>
    <nav class="bg-primary py-4 flex justify-center items-center text-white md:text-xl">
        <NuxtLink to="/" class="hover:underline decoration-wavy decoration-secondary">
            Home
        </NuxtLink>
        <NuxtLink to="/schedule" class="ml-4 hover:underline decoration-wavy decoration-secondary">
            Schedule
        </NuxtLink>
        <NuxtLink to="/donate" class="ml-4 hover:underline decoration-wavy decoration-secondary">
            Donate
        </NuxtLink>
        <a href="/register" target="_blank" class="ml-4 hover:underline decoration-wavy decoration-secondary">
            Sign Up
        </a>
        <a href="https://2019.windyhacks.com" target="_blank" class="ml-4 hover:underline decoration-wavy decoration-secondary">
            2019
        </a>
    </nav>
    <div class="relative flex justify-center items-center bg-primary py-6">
        <div>
            <img class="select-none mx-auto px-4 sm:h-28 lg:h-48" src="/full_logo.png" />
            <div class="mt-4 text-white rounded-lg p-2 lg:p-4">
                <h2 class="text-center text-4xl text-white lg:flex justify-center items-center">Build 
                    <div class=" mx-3 relative italic font-semibold underline lg:no-underline decoration-secondary">
                        something amazing
                        <img class="select-none hidden lg:block absolute top-6" src="/underline.svg" />
                    </div> 
                    in just 24 hours.
                </h2>
                <p class="mt-2 lg:mt-8 text-lg md:text-2xl text-center text-white/70">June 22-23rd, 2024</p>
                <div class="flex flex-col items-center justify-center">
                    <a @click="trackEvent('Register CTA')" href="/register" class="mt-6 bg-white border-4 border-secondary hover:bg-white/90 text-primary font-semibold text-2xl px-8 py-4 rounded-lg">Register Now</a>
                </div>
            </div>
        </div>
        <div :style="`transform: translateX(-6%)`" class="bottom-0 absolute w-full">
            <!-- <img class="object-fill" src="/cityscape.svg" /> -->
        </div>
    </div>
    <NuxtPage />
    <div class="bg-primary pb-6">
        <h2 class="pt-16 text-center text-5xl text-white lg:flex justify-center items-center">Let's build 
            <p class="mx-4 relative italic font-semibold underline lg:no-underline decoration-secondary">
                something amazing
                <img class="select-none hidden lg:block absolute top-7" src="/underline.svg" />
            </p> 
            together.
        </h2>
        <div class="lg:w-2/3 mx-auto grid grid-rows-2 gap-8 md:grid-rows-none md:grid-cols-2 mt-12 md:mt-24">
            <div class="text-center my-auto">
                <p class="mt-2 mb-2 text-2xl lg:text-3xl text-center text-white/70">June 22nd-23rd, 2024</p>
                <a 
                    href="https://www.google.com/maps/place/Towne+Place+West/@42.0267801,-88.1528624,16z/data=!3m1!4b1!4m6!3m5!1s0x880fa83465400e3b:0xa03a283520013e1b!8m2!3d42.0267801!4d-88.1528624!16s%2Fg%2F1tftlt9f?entry=ttu" 
                    target="_blank"
                    class="hover:underline hover:decoration-wavy hover:decoration-secondary italic text-2xl lg:text-3xl text-center text-white/70"
                >Towne Place Clubhouse, 2841 Meadow Ln, Schaumburg IL 60195</a>
            </div>
            <div class="text-center my-auto">
                <a @click="trackEvent('Register CTA')" href="/register" class="bg-white border-4 border-secondary hover:bg-white/90 text-primary font-semibold text-2xl px-8 py-4 rounded-lg">Register Now</a>
                <br />
                <br />
                <br />
                <br />
                <a @click="trackEvent('Discord CTA')" href="/discord" class="bg-white border-4 border-secondary hover:bg-white/90 text-primary font-semibold text-2xl px-8 py-4 rounded-lg">Join the Discord</a>
            </div>
        </div>
        <div class="mt-16 text-center">
            <img class="select-none mx-auto px-4 h-16" src="/full_logo.png" />
            <div class="w-2/3 md:w-1/6 mx-auto mt-4 grid grid-cols-3 gap-0">
                <div class="mx-auto">
                    <a href="mailto:team@windycityhacks.com">
                        <svg class="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#F95A5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="mx-auto">
                    <a @click="trackEvent('Visit Twitter')" href="https://twitter.com/windycityhacks" target="_blank" rel="noreferrer">
                        <svg class="h-8" fill="" viewBox="0 0 24 24" id="twitter" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M21.63,6.92a1,1,0,0,0-.83-.2,8.31,8.31,0,0,1-1.1.17,4.49,4.49,0,0,0-8.55.52c-2.73.67-5.4-2.07-5.43-2.1a1,1,0,0,0-1-.27,1,1,0,0,0-.7.8,11.69,11.69,0,0,0,1.51,8.67A7.25,7.25,0,0,1,3,15a1,1,0,0,0-.89,1.46C2.3,16.83,4.18,20,11.58,20c5.84,0,8-5.2,8.36-8.38A4,4,0,0,0,22,7.7,1,1,0,0,0,21.63,6.92Z" style="fill: #F95A5F;"></path></g></svg>
                    </a>
                </div>
                <div class="mx-auto">
                    <a @click="trackEvent('Visit Instagram')" href="https://instagram.com/windycityhacks" target="_blank" rel="noreferrer">
                        <svg class="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="2"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#F95A5F"></path> </g></svg>
                    </a>
                </div>
            </div>
            <div class="w-2/3 mx-auto">
                <p class="mt-4 text-white/70">&copy; Windy City Hacks 2024</p>
                <a href="/fiscal_sponsorship_confirmation.pdf" target="_blank" class="text-white/70 hover:underline hover:decoration-wavy hover:decoration-secondary italic">Fiscally sponsored by The Hack Foundation (EIN: 81-2908499)</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { trackEvent } = useFathom();
    useHead({
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "Windy City Hacks",
                    "startDate": "2024-06-22",
                    "endDate": "2024-06-23",
                    "description": "Windy City Hacks is a free two-day event for programmers, artists, designers, & other high schoolers in the Chicagoland area to come together and build apps & games.",
                    "location": {
                        "@type": "Place",
                        "name": "Towne Place West, Schaumburg, IL",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "2841 Meadow Ln",
                            "addressLocality": "Schaumburg",
                            "addressRegion": "IL",
                            "postalCode": "60195",
                            "addressCountry": "US"
                        }
                    },
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "url": "https://windycityhacks.com"
                    }
                })
            }
        ]
    })
</script>

<style>
::selection {
    background: #FF5A5F;
    color: white;
}

::-moz-selection {
    background: #FF5A5F;
    color: white;
}
</style>
