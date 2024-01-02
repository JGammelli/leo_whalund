export const about = {
  title: "Hi, I'm Leo!",
  content:
    "I have had a passion for games ever since my parents bought a Gameboy Advance and Pokemon LeafGreen cartridge. I love crafting mechanics, testing and improving them until they play and feel the way they should. I am a social, happy and driven person who works best in teams where communication is free flowing and clear. I am looking for a place where I can grow as a designer and work together with a close knit team.",
  image: "1gmEPZpe8tS0CIZJL27YgJwdrjNYwLruq",
};

export const contact = {
  title: "Reach out to me!",
  git: "https://github.com/LostmyCigar",
  email: "leo.wahlund@gmail.com",
  phone: "+46 760 397 664",
  linkedIn: "https://se.linkedin.com/in/leo-wahlund-628778201",
};

export const projects = [
  {
    title: `Vanagandar`,
    content: `Programming, Systems, Team, Unreal, Tactical Shooter`,
    image: `188GqRjTAx1XpSx_WRUrOpkOJRSY8nUQo`,
    isDesign: false,
    isProgram: true,
    programText: `An online tactical shooter akin to CS and Valorant. A side project I worked on part time while having courses. The team goal was to challenge ourselves, while creating a game that could serve as a base for an eventually commercial product.
    
    This project was started as a graduation project for designers, meaning they could work fulltime on the project. I joined in as one of 3 programmers helping out with the project while still having courses on the side. 
    
Setting up the team for success

A slightly clickbait-y title with just a hint of hubris, but it describes how I worked within the project. 

With a team full of designers that could work full time and programmers that could only work part time, we knew that a lot of work would fall to our (very skilled) technical designers. The problem with this is that larger systems sometimes tend to look like something straight from the kitchen in an Italian restaurant. Especially when fully built in blueprints. To prevent this I built the base for weapons in our game so that designers could easily create and add behavior-blueprints to them without having to poke around in the weapons themselves (aka Components). Recoil can be created for our weapons by simply creating a blueprint and defining what should happen in an inherited function. Then we can simply select to add this UObject class in a dropdown menu in our weapon and recoil just works (assuming the recoil itself is done right). 

The system is built around the fact that weapons are (as with a surprising amount of other common game mechanics) essentially split into three parts:

When should I do thing?
How do I do thing?
What happens now that I have done thing?

(Thing, in this case, being shooting)

The WHEN
Constraints we call them, the class that handles if a weapon is allowed to shoot or not when the player sends us shoot input. Here we place things such as Fire Rate and Ammunition. When the weapon wants to know if it is allowed to shoot, it simply CheckConstraints() if they all return true (meaning we are allowed ofcourse).  

The HOW
This part is broken down into two classes: Aim modifiers and Bullet Spawners. 

Aim Modifiers affect where we shoot and include things such as movement error and spread. These modifiers gets passed a Vector AimDirection by reference that they modify in the way they want before sending it forth to BulletSpawners.

The actual shooting. The single trace, multi trace or multiple multi traces that we wanna do when shooting. All put together under the collective name “Bullet Spawner”. Unlike our constraints or Aim modifiers, a weapon can only have one bullet spawner, if we want to shoot multiple bullets we do that inside our bullet spawner. This is meant for [Image]




When developing tools for designers to work with I focus on three points:

Flexibility 
Designers should be able to use the tool to create whatever they set their mind too
(Few limitations)

Scalability
We should be able to add behaviors and functionality without having to modify or accidently break existing ones. More or less, follow the Open-Closed principle.

Understandability
This one is tricky compared to the other two points, as it is not as much related to code. Designers must be able to easily understand the tool and be able to quickly pick it up and use it to iterate on their designs.

             

While scalability and flexibility (to some degree) can be achieved by just making sure your following SOLID, understandability is not. 
[Image]
`,
    link: "https://github.com/LostmyCigar/Vanagandar"
  },
  {
    title: `Tomb of Alar`,
    content: `Programming, Tools, Team, Unreal, TopDown`,
    image: `1r-xOOLHDq7YZN_FodZrq85ltd-Njt10q`,
    isDesign: false,
    isProgram: true,
    programText: `Having betrayed its allies, a wraith now seeks to escape the tomb with its newfound immortality. Tomb of Alar is a twin stick shooter worked on full time over the course of 4 weeks. The team goal was to deliver a polished game in a short timeframe.
    
    Note: I will not be writing detailed information code implementation here. This will be more about the code structure and how we worked as a team.

Some things I did gameplay wise here and would live to talk about in person though are: 
Projectile movement 
Targeting, Turning, Accelerating, Deaccelerating, etc

Projectile Spawning
Handle Input, Aim direction, Aim offsets, Multispawning, etc

About the Game
Tomb of Alar's creation was dictated by deadlines. We decided early on as a group that we wanted a polished product and to achieve that, we set our own deadline for the game of 2 weeks. After those two weeks we wanted to have the game locked in feature wise so we could just focus on polishing what we had created thus far.

This needs to be flexible, fast!
Creating the shooting for a twinstick shooter is quite hard designwise. Being the absolute core-mechanic of the game, it completely dictates whether the end product feels good to play or not. Because of this we wanted designers to be able to try out and iterate over multiple different designs for the shooting. This becomes a challenge of teamwork and effective communication. Designers were working with the tool as soon as it became possible and new features had to be created on demand. We needed clear communication on what features needed prioritization over others as well as me giving instruction on how to use everything. 

The Good, 
Data assets for everything. Well, two things. Weapon behavior and Projectile behavior. This creates a lot of flexibility, the biggest being the possibility to easily swap data assets on demand, completely changing the behavior of projectiles during their lifetime. This built the possibility of creating very complex weapons since we can link projectile behaviors together by having the keep track of the next behavior and so on. Together with bullets themselves being able to create new bullets after a certain time or on destruction we can create almost any type of projectile imaginable (assuming we also have the movement required for it).
Add two different shooting gifs here 


The Bad 
As someone who very much enjoys clean and maintainable code, this project pained me a bit. If I had to place it somewhere in my favorite triangle it had to be around here:

[Image]

A big chunk of the code is in the same few files and it would be hard for someone who hasn't worked in them to just jump in and take over.

I will not go into details of stuff I do not like with my code (This is a portfolio after all) but instead I'll move to a chapter that is closely related to mistakes. 

and The Ugly
(Actually learnings, but that doesn't create a movie reference)

You can always skip this part and go straight into the Vanagandr tab, as that is the result of my learnings here. 

I'll start off by saying that I do not regret my fast made spaghetti. It was what the project required and it works bug free (to the best of our knowledge). But towards the end of the project I felt how the code was beginning to catch up to me and would need a complete rewrite. 

In my previous projects I’ve always tried to do a more component-based structure of the code and this project solidified that approach for me even more. C++ was created for a reason. A weapon class should maybe handle when we shoot and what we shoot, but does it really need to know every single detail. Pack those down into small classes and let them handle themselves. The weapon class can handle a few abstract parent classes instead and tell them when to do their stuff.


Working with Designers
As soon as designers could start working with shooting I created a small guide on how it all worked and how to create new “weapons” in blueprints. This was so that designers could have something to follow while working and did not require me to repeat explanations multiple times. After a while this guide became outdated, but at that point everyone working with weapons had a grasp on how they worked so that it was no longer needed. 
[Image]`,
    link: "https://github.com/LostmyCigar/TombOfAlar",
  },
  {
    title: `Methusela`,
    content: `Design, Combat, Team, Unity, TopDown`,
    image: `1Kn2v6yi7PUFK3W92TGJZmYLwmcpK-uCW`,
    isDesign: true,
    isProgram: false,
    designText:
      "Methuselah is a 10-week project I worked on together with other students from different disciplines. I worked as Lead Designer and was responsible for the overall design of the game. Spending most of my time getting the combat and feel of the game to be the best it could with the tools available. Although it has many flaws (to be expected from a game made in 10 weeks) I am still happy with what we achieved.",
    linkItch: "https://felltree-interactive.itch.io/methuselah",
  },
  {
    title: `Zhi`,
    content: `Programming, Design, Gameplay, Team, Unity, Co-Op, Puzzle`,
    image: `1Qyb4MT1I7j3AWb3SIGwdjiMBOaWy9p55`,
    isDesign: false,
    isProgram: true,
    programText: `Follow a girl and her dog as they explore an old apartment and learn of its past.
    I can't cover everything in this tiny space. Here is some of the stuff I did that I won't be covering on this page, but would love to go over in person:

Level Design
Puzzle Design
Handling input devices for Co-Op



Many Hats
Zhi is a team project that, due to untimely sickness amongst our team members, had me doing a mixture of design and programming work.
`,
    link: "https://github.com/LostmyCigar/Zhi",
  },
  {
    title: `Project plutonium`,
    content: `Programming, Gameplay, Team, Unity, Co-Op`,
    image: `1GqQ_-6TSdNQXa2Tnm_9PgVauPpEloSss`,
    isDesign: false,
    isProgram: true,
    programText: `Bring a friend and find the city's hazardous treasures! 
    2 players control 3 robots, each with a different ability, clean up the city before the timer runs out!`,
    link: "https://github.com/LostmyCigar/ProjectPlutonium",
  },
  {
    title: `The Solace`,
    content: `Programming, Team, Unreal, Puzzle`,
    image: `1zOmZokAN5ktXPU7RgntgDrV_rEw8WysJ`,
    isDesign: false,
    isProgram: true,
    programText: `Explore a misty forest as you solve puzzles and escape the island.`,
    link: "",
  },
  {
    title: `Aastra`,
    content: `Solo, Small project, Gamemaker, Platformer`,
    image: `1tV1FofE_wLxIuSPqYcaol6zRz1ZvaItl`,
    isDesign: true,
    isProgram: false,
    designText:
      "The first game I made. A platformer with low gravity, a double jump and some simple obstacles with the goal to make it as high as possible. I tried making an open map where the player can try out different paths with varying obstacles, some requiring precise maneuvering, others timing and a few with both. Despite the basic functionality of the  obstacles, the game provides a real challenge even for experienced platformer players.",
    programText: "Some Program text here",
    linkDownload: "https://drive.google.com/file/d/1t1PiOq7WooLDD2WEnwM4h8R93yx3gA-l/view?usp=sharing",
  },
  {
    title: `Bouncing Ball`,
    content: `Solo, Small project, Gamemaker, Platformer`,
    image: `1TcxxFg_hPrJemkzDMOx8au20TR1pclrC`,
    isDesign: true,
    isProgram: false,
    designText:
    `A unique game where you control a bouncing ball and platforms as you navigate through 6 very different levels.
      
    A challenging game where the player tries to maneuver both moving platforms and a bouncing ball at the same time. Using these simple mechanics I tried creating challenges based on different elements; timing, precision and a puzzle. It’s a short and simple game that could, with a few adjustments, work well on mobile.`,
    programText: "Some Program text here",
    linkDownload: "https://drive.google.com/file/d/1eveHOMsnAGDD3V2LAl2RvD9iPa0ja_yk/view?usp=sharing",
  },
  {
    title: `Behemoth Battles`,
    content: `Solo, Small project, Unity, Card battler`,
    image: `1nZvwU0EfLlZ4w8j3l1tRK_aUHzB1lr1w`,
    isDesign: true,
    isProgram: false,
    designText:
      "An attempt at turning a board game I designed into a computer game. A result of me wanting to explore some key mechanical differences in online and offline card games and a project I’m still working on from time to time. It is still at the stage where I am mostly translating the board game over to Unity, it is playable with the core mechanics implemented. Since it is made mainly for testing out mechanics, the balance is currently a bit off and it is lacking the visual clarity that the board game has. I am hoping to start testing with more transformative mechanics soon, such as cards being able to attack their own teammates for benefits and buffs.",
    programText: "Some Program text here",
  },
  {
    title: `Synergy Shooter`,
    content: `Solo, Small project, Unity, Mobile`,
    image: `1eGTQRZgdQG_rfeFuqgaGI6GjwqPC6AyG`,
    isDesign: true,
    isProgram: false,
    designText:
    `Mobile game created to explore the effect that synergies can have on player experience and overall enjoyment.
      
    A classic ball shooting game filled with odd effects. This game was made in order to study the effects that synergies have on game enjoyment. Three versions were created in order to compare the effect on players, one without synergies, one with premade ones and one where the player could choose what effects to combine. It is currently the only game I have made for mobile.`,
    programText: "Some Program text here",
    linkDownload: "https://drive.google.com/file/d/1GcN2pmGTxcI7lgDd7Jv04sxixdRwMn96/view?usp=sharing"
  },
  {
    title: `Slice Dude`,
    content: `Design, Team, Game-jam, Unity`,
    image: `1YEr5ve4C6G0ba99PEzxKcLZ9Wgctn89y`,
    isDesign: true,
    isProgram: false,
    designText:
    `A game-jam game about a dude slicing things. When your only tool is a hammer, every problem becomes a nail. Well, when your arms are swords, every problem becomes slice-able.
    
    Controls: WASD and Mouse SliceDude is the result of a short 12 hour game jam. I worked on the design, made quick prototypes and VFX that unfortunately didn't make it in. We tried making somewhat of a complete game in 12 hours and the result is an unpolished main mechanic. The goal we missed was making the slice feel satisfying to use. Solving this would start with making the hitbox larger, making it hit in front and around the player when the dash ends along with making the slice visually satisfying through effects and juice.`,
    programText: "Some Program text here",
    linkDownload: "https://drive.google.com/file/d/1KOZSj7uhzDVGTy9OnfuXgvdAcKJzuIGB/view?usp=sharing",
  },
];
