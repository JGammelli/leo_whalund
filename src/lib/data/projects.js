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
    jumpToCode: true,
    programText: `This project was started as a graduation project for designers, meaning they could work fulltime on the project. I joined in as one of 3 programmers helping out with the project while still having courses on the side. 

    *Setting up the team for success*
    
    A slightly clickbait-y title with just a hint of hubris, but it describes how I worked within the project. 
    
    With a team full of designers that could work full time and programmers that could only work part time, we knew that a lot of work would fall to our (very skilled) technical designers. The problem with this is that larger systems sometimes tend to look like something straight from the kitchen in an Italian restaurant. Especially when fully built in blueprints. To prevent this I built the base for weapons in our game so that designers could easily create and add behavior-blueprints to them without having to poke around in the weapons themselves (aka Components). Recoil can be created for our weapons by simply creating a blueprint and defining what should happen in an inherited function. Then we can simply select to add this UObject class in a dropdown menu in our weapon and recoil just works (assuming the recoil itself is done right). 
    
    Here is how stuff looks for designers:
    !!http://drive.google.com/uc?export=view&id=1Pv7qC4JiNooF-Y2CcVXGKQMaKv1wKXkb!!

    Weapon effects are deprecated, please ignore :)
    !!http://drive.google.com/uc?export=view&id=1-dMV3JQDQSCo5bBWQEQs3HdbJrCHsHLp!!
    Designers can now add and edit their blueprint behaviors inside the weapon
    
    ##*The system*##
    The system is built around the fact that weapons are (as with a surprising amount of other common game mechanics) essentially split into three parts:
    
    *- When should I do thing?*
    *- How do I do thing?*
    *- What happens now that I have done thing?*
    
    (Thing, in this case, being shooting)
    
    The *WHEN*
    Constraints we call them, the class that handles if a weapon is allowed to shoot or not when the player sends us shoot input. Here we place things such as Fire Rate and Ammunition. When the weapon wants to know if it is allowed to shoot, it simply CheckConstraints() if they all return true (meaning we are allowed ofcourse).  
    
    !!http://drive.google.com/uc?export=view&id=1T91H7htAJUNadiyI9bH2Anse0TlS72pl!!

    The *HOW*
    This part is broken down into two classes: Aim modifiers and Bullet Spawners.
    Aim Modifiers affect where we shoot and include things such as movement error and spread. These modifiers gets passed a Vector AimDirection by reference that they modify in the way they want before sending it forth to BulletSpawners.
     
    The actual shooting. The single trace, multi trace or multiple multi traces that we wanna do when shooting. All put together under the collective name “Bullet Spawner”. Unlike our constraints or Aim modifiers, a weapon can only have one bullet spawner, if we want to shoot multiple bullets we do that inside our bullet spawner. Bullet spawners pass on the results of their hits since we are working under the assumption that they are all hitscan. The results then get sent to the server for confirmation. This is done in our weapons Fire() function, in other words, not in our bullet spawner class.
    
    !!http://drive.google.com/uc?export=view&id=1QzFsGOk3nPCIb_kspzsZEZW9zApSHrVI!!
    
    The *What happens now that I have done thing?*
    Camera shake, recoil, dragon coming down from the sky and kidnapping the player. We call it aim modifiers, but in reality, anything that we might want to do now that the player fired its shot goes here. Now, if you look through the code you might notice that this class could technically just be ignored and its behaviors changed into “Bullet Modifiers”. We already have the information we need about the shooting, it no longer matters if the player is rotated 180°, the shot will hit the correct spot all the same. But the reason for this is simply; *structure*. Aim modifiers are (ironically) the things that should not affect our aim direction, why even give them access to it. This is also why we are not using one, larger class for weapon behaviors with 3 different functions for our different types, it reduces the risk of human error. 
    
    To add to this, Order of execution is also important in our code. Bullet modifiers are important to our shooting, they affect where our bullet lands, what if they need to know exactly our original aim direction? The aim direction they have access to might have already been offset by another modifier and in that case they need the camera direction to find the original again (although they should probably be given the original aim direction in addition to the modified one in the first place, oh well). If the camera rotation has been affected by recoil at this point, finding the original aim direction is no longer possible.
    
    ¤*The Code*¤
Our Weapons references to its behaviors:

Thanks to the nifty UProperty specifier “Instanced” our UObject classes are, well, instanced and therefore selectable in the Blueprint Details.

!!http://drive.google.com/uc?export=view&id=1NqsYNJs1-cS1B-nLMgPbU06wJ8WSEHY1!!

Our *WeaponBehaviour* base:

This class could use the DefaultToInstanced specifier. But since this system is heavily influenced by Unreal Engine's own InputActions and triggers, I decided to keep it similar.
!!http://drive.google.com/uc?export=view&id=1bSfnZ-U_Hw2LkwJVQ-xh-FaZKZV4pLhm!!

The *AimModifier* class (Constraints and BulletModifiers look very similar to this):
!!http://drive.google.com/uc?export=view&id=1KBQAtsr3ieW-UVv3arcbWVHvXcVAYTZv!!

`,
    link: "https://github.com/LostmyCigar/Vanagandar",
  },
  {
    title: `Tomb of Alar`,
    content: `Programming, Tools, Team, Unreal, TopDown`,
    image: `1r-xOOLHDq7YZN_FodZrq85ltd-Njt10q`,
    isDesign: false,
    isProgram: true,
    jumpToCode: true,
    programText: `*Note:* I will not be writing detailed information code implementation here. This will be more about the code structure and how we worked as a team.

    Some things I did *gameplay wise* here and would live to talk about in person though are: 
    *Projectile movement* 
    Targeting, Turning, Accelerating, Deaccelerating, etc
    
    *Projectile Spawning*
    Handle Input, Aim direction, Aim offsets, Multispawning, etc
    
    *About the Game*
    Tomb of Alar's creation was dictated by deadlines. We decided early on as a group that we wanted a polished product and to achieve that, we set our own deadline for the game of 2 weeks. After those two weeks we wanted to have the game locked in feature wise so we could just focus on polishing what we had created thus far.
    
    *This needs to be flexible, fast!*
    Creating the shooting for a twinstick shooter is quite hard designwise. Being the absolute core-mechanic of the game, it completely dictates whether the end product feels good to play or not. Because of this we wanted designers to be able to try out and iterate over multiple different designs for the shooting. This becomes a challenge of *teamwork* and *effective communication*. Designers were working with the tool as soon as it became possible and new features had to be created on demand. We needed clear communication on what features needed prioritization over others as well as me giving instruction on how to use everything.
    
    !!http://drive.google.com/uc?export=view&id=14nfFnndUkCoRxNELavFBCFWkaRlj1oLK!!
    This is where the designers would change bullet behavior

    *The Good,* 
Data assets for everything. Well, two things. Weapon behavior and Projectile behavior. This creates *a lot of flexibility*, the biggest being the possibility to easily swap data assets on demand, completely changing the behavior of projectiles during their lifetime. This built the possibility of creating very complex weapons since we can link projectile behaviors together by having the keep track of the next behavior and so on. Together with bullets themselves being able to create new bullets after a certain time or on destruction we can create almost any type of projectile imaginable (assuming we also have the movement required for it).
!!http://drive.google.com/uc?export=view&id=1DbeNVa0rvHpNL4YH4Gtij3vzc86-xFgV!!
!!http://drive.google.com/uc?export=view&id=1C72f2Lnfzonby2VPCdk4UKwxUmK4coel!!

*The Bad*
As someone who very much enjoys clean and maintainable code, this project pained me a bit. If I had to place it somewhere in my favorite triangle it had to be around here:
!!http://drive.google.com/uc?export=view&id=1Kwn7OLofP-HvTE19_25T4CCgr4as7yVH!!

A big chunk of the code is in the same few files and it would be hard for someone who hasn't worked in them to just jump in and take over.

I will not go into details of stuff I do not like with my code (This is a portfolio after all) but instead I'll move to a chapter that is closely related to mistakes. 

*and The Ugly*
(*Actually learnings*, but that doesn't create a movie reference)

You can always skip this part and go straight into the *Vanagandr* tab, as that is the result of my learnings here. 

I'll start off by saying that I do not regret my fast made spaghetti. It was what the project required and it *works bug free* (to the best of our knowledge). But towards the end of the project I felt how the code was beginning to catch up to me and would need a complete rewrite. 

In my previous projects I’ve always tried to do a more component-based structure of the code and this project solidified that approach for me even more. C++ was created for a reason. A weapon class should maybe handle when we shoot and what we shoot, but does it really need to know every single detail. Pack those down into small classes and let them handle themselves. The weapon class can handle a few abstract parent classes instead and tell them when to do their stuff.


*Working with Designers*
As soon as designers could start working with shooting I created a *small guide* on how it all worked and how to create new “weapons” in blueprints. This was so that designers could have something to follow while working and did not require me to repeat explanations multiple times. After a while this guide became outdated, but at that point everyone working with weapons had a grasp on how they worked so that it was no longer needed.

!!http://drive.google.com/uc?export=view&id=1wkpedene4TCMaciUXcFTwKFWZyDqLdA2!!
(Made in miro)
    `,
    link: "https://github.com/LostmyCigar/TombOfAlar",
  },
  {
    title: `Methusela`,
    content: `Design, Combat, Team, Unity, TopDown`,
    image: `1Kn2v6yi7PUFK3W92TGJZmYLwmcpK-uCW`,
    isDesign: true,
    isProgram: false,
    designText: `Methuselah is a 10-week project I worked on together with other students from different disciplines. I worked as Lead Designer and was responsible for the overall design of the game. Spending most of my time getting the combat and feel of the game to be the best it could with the tools available. Although it has many flaws (to be expected from a game made in 10 weeks) I am still happy with what we achieved.
    
    ##*Base Combat*##
    The main point with the combat design in Methuselah was to nail the fantasy of an Ent crushing enemies, akin to Lord of the Rings Battle of Isengard, without making the game too much of a “click in this direction and enemies die”-type of game. To achieve this I tried basing the combat on displacement. Letting the player feel powerful by sending enemies flying rather than killing them in one hit. This let us build the combat on timing. Methuselah uses slow and heavy attacks that interrupt enemies and knocks them away, the player has to use this to their advantage and keep from being swarmed by enemies.
    
    ##*What I would have done differently*##
    Being a game produced in a short amount of time, Methuselah has its fair amount of flaws. The hook on space is one example. We wanted to avoid giving the player too much mobility as it doesn’t go well with the Ent fantasy, but we also wanted to give the player a way to deal with ranged enemies. A hook seemed like the best option, Methuselah sends vines from its arms and grabs enemies within range to bring them close enough for its other abilities. Unfortunately, due to close deadlines and the fact that a hook couldn’t be made with the same tools as the rest of the attacks, the result was rushed and quite far from the initial design. The better call would have been to scrap the hook altogether since it currently takes away more from the experience than it gives by enabling the “stand at a distance and hook one enemy at the time” strategy. Removing it would protect the players from themselves. Methuselah has more design flaws than just the hook, such as the upgrades between rooms being underwhelming both in feel and function and some narrow rooms that makes the player push through choke points instead of fighting in the open.
    `,
    linkItch: "https://felltree-interactive.itch.io/methuselah",
  },
  {
    title: `Zhi`,
    content: `Programming, Design, Gameplay, Team, Unity, Co-Op, Puzzle`,
    image: `1Qyb4MT1I7j3AWb3SIGwdjiMBOaWy9p55`,
    isDesign: false,
    isProgram: true,
    programText: `I can't cover everything in this tiny space. Here is some of the stuff I did that I won't be covering on this page, but would love to go over in person:

    Level Design
    Puzzle Design
    Handling input devices for Co-Op
    Interacting and Selecting 
    Player controller
    
    ##*Many Hats*##
    Zhi is a team project that, due to untimely sickness amongst our team members, had me doing a mixture of design and programming work (and even some “art”). 
    
    Here I will mainly cover the gameplay code behind something that is somewhat commonly used in games: *The Camera*.
    
    To start of with the basics of the camera:
    
    We have a base transform. The base transform is almost the player transform, but moved to around the left shoulder as to avoid a lot of staring into the players back.
    
    Then we have the pivot point. The pivot point is a child of the base transform and moved a distance from it (to the place we want our camera to be).
    
    When input is received we rotated the base, unity does its matrix transformations and *voila*, the camera goes where the player wants it to.
    !!http://drive.google.com/uc?export=view&id=1NORx9e6OLbhD-aMDWBGD2TwLwywFhdga!!
    !!http://drive.google.com/uc?export=view&id=1xns3M-4FBQQIFDtCG5T3qVXDEpxQ-XfX!!
    Camera Handling is of course run in LateUpdate()

    ##*Cutting Corners (Literally)*##
    Zhi plays out in a cramped apartment. What this means for the camera is that, when rotating, we will hit *a lot of corners*. Corners are BAD. Corners makes for a jagged camera and a bad player experience. My way of solving this was to use a SphereCast, more expensive than I'd like but still affordable. This way we never hit the inner part of the corner, instead we land somewhere next to it. Mixing this together with an illegal lerp makes the camera go smoothly between positions.
    
    Here are some other notes about the code that can be seen:    
    !!http://drive.google.com/uc?export=view&id=1_rtks6Gu2eqyWqKShvTg-gyj68GnTtQU!!
	
The hit objects normal is included when setting the target position
This is to offset the camera slightly and avoid clipping.

Spherecast is using a predetermined layermask
We do not want to collide with every tiny little object we can find. Larger objects should be collided with though. 

Lerp is frame rate dependant 
The T value should be multiplied by deltatime. Yes, I could have hidden this by refactoring the code before showing you, but I chose the route of honesty.

Distance should not be recalculated every frame
The distance to the pivot point won't change so it should just be cached at start.

!!http://drive.google.com/uc?export=view&id=1w_FhMTONlC7eYH-6gHVK-7PMx28hQXn_!!
The result of two functions

Another Lerp use case found in the code is when we transition between camera states (done with a quickly made, switch case bloated statemachine).
!!http://drive.google.com/uc?export=view&id=1uahU1yzSLBJkvAQRD75l6kqpRF3wjuRx!!

This time we are not lerping without a license and the result looks like this:
!!http://drive.google.com/uc?export=view&id=1Zbv4cO70tBcLEMZxA4Lo2N8PSSJEFhcs!!
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
    linkDownload:
      "https://drive.google.com/file/d/1t1PiOq7WooLDD2WEnwM4h8R93yx3gA-l/view?usp=sharing",
  },
  {
    title: `Bouncing Ball`,
    content: `Solo, Small project, Gamemaker, Platformer`,
    image: `1TcxxFg_hPrJemkzDMOx8au20TR1pclrC`,
    isDesign: true,
    isProgram: false,
    designText: `A unique game where you control a bouncing ball and platforms as you navigate through 6 very different levels.
      
    A challenging game where the player tries to maneuver both moving platforms and a bouncing ball at the same time. Using these simple mechanics I tried creating challenges based on different elements; timing, precision and a puzzle. It’s a short and simple game that could, with a few adjustments, work well on mobile.`,
    programText: "Some Program text here",
    linkDownload:
      "https://drive.google.com/file/d/1eveHOMsnAGDD3V2LAl2RvD9iPa0ja_yk/view?usp=sharing",
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
    designText: `Mobile game created to explore the effect that synergies can have on player experience and overall enjoyment.
      
    A classic ball shooting game filled with odd effects. This game was made in order to study the effects that synergies have on game enjoyment. Three versions were created in order to compare the effect on players, one without synergies, one with premade ones and one where the player could choose what effects to combine. It is currently the only game I have made for mobile.`,
    programText: "Some Program text here",
    linkDownload:
      "https://drive.google.com/file/d/1GcN2pmGTxcI7lgDd7Jv04sxixdRwMn96/view?usp=sharing",
  },
  {
    title: `Slice Dude`,
    content: `Design, Team, Game-jam, Unity`,
    image: `1YEr5ve4C6G0ba99PEzxKcLZ9Wgctn89y`,
    isDesign: true,
    isProgram: false,
    designText: `A game-jam game about a dude slicing things. When your only tool is a hammer, every problem becomes a nail. Well, when your arms are swords, every problem becomes slice-able.
    
    Controls: WASD and Mouse SliceDude is the result of a short 12 hour game jam. I worked on the design, made quick prototypes and VFX that unfortunately didn't make it in. We tried making somewhat of a complete game in 12 hours and the result is an unpolished main mechanic. The goal we missed was making the slice feel satisfying to use. Solving this would start with making the hitbox larger, making it hit in front and around the player when the dash ends along with making the slice visually satisfying through effects and juice.`,
    programText: "Some Program text here",
    linkDownload:
      "https://drive.google.com/file/d/1KOZSj7uhzDVGTy9OnfuXgvdAcKJzuIGB/view?usp=sharing",
  },
];
