<template>
  <LayoutSection>
    <h1 class="text-4xl sm:text-7xl font-bold mb-8">Introducing Myself</h1>
    <div class="text-lg mb-8">
      <p class="mb-4">
        I am a curious and driven developer who is constantly seeking new challenges. It all started with a small high school course. It was at this time I realized that you could combine color and shape with technology in a creative way.
I have long been interested in music and art, but it wasn't until now that I discovered the magic that could be created on a computer screen using HTML and CSS. 
      </p>
      <p class="mb-4">
        I followed that path, and today I call myself a Frontend/Fullstack developer. I studied at Mediainstitutet in Stockholm where I learned the basics of object-oriented programming. I learned about databases, UX, and delved into JavaScript and the world of frameworks. This later led me to an internship at a consulting company where I worked on real in-house projects.
      </p>
      <p>
        With my previous aesthetic interests, I feel like a strong frontend developer with an eye and a feel for details. This greatly facilitates my work as I now closely collaborate with designers.
      </p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 mx-auto -gap-4 md:gap-4 my-16">
      <Polaroid title="DIVING - LIDINGÖ 2019" class="rotate-6 flex-none">
        <img src="/img/diving.png" alt="Image of Andreas diving" />
      </Polaroid>
      <Polaroid title="GOTLAND 2021" class="rotate-6 flex-none">
        <img src="/img/stroller.png" alt="Image of Andreas with a stroller" />
      </Polaroid>
      <Polaroid title="PARENTAL LEAVE - 2023" class="-rotate-2 flex-none">
        <img src="/img/parental_leave.png" alt="Image of Andreas" />
      </Polaroid>
      <Polaroid title="DOWNHILL - ÅRE 2020" class="rotate-2 flex-none">
        <img src="/img/downhill.png" alt="Image of Andreas in Åre with bike" />
      </Polaroid>
      <Polaroid title="MY FAMILY - 2024" class="-rotate-3 flex-none">
        <img src="/img/family.png" alt="Image of Andreas with family" />
      </Polaroid>
      <Polaroid title="MY WEDDING - 2022" class="-rotate-6 flex-none">
        <img src="/img/wedding.png" alt="Image of Andreas on his wedding" />
      </Polaroid>
    </div>
    <div class="flex justify-center">
      <Button path="/experience">
        Check out my experience!
      </Button>
    </div>
  </LayoutSection>
</template>