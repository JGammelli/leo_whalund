export const about = {
  title: "Hi, I'm Leo!",
  content:
    "I have had a passion for games ever since my parents bought a Gameboy Advance and Pokemon LeafGreen cartridge. I love crafting mechanics, testing and improving them until they play and feel the way they should. I am a social, happy and driven person who works best in teams where communication is free flowing and clear. I am looking for a place where I can grow as a programmer and work together with a close knit team.",
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
    content: `Programming, Systems, Team, Unreal, Tactical Shooter, Recent`,
    description: `An online tactical shooter akin to CS and Valorant. A side project I worked on part time while having courses.
    The team goal was to challenge ourselves, while creating a game that could serve as a base for an eventually commercial product.
    `,
    image: `18xnhkRmWtEDugdyAd4aUOPpMhc_8AZZt`,
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
    Designers can now add and edit their blueprint behaviors inside the weapon.
    
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
    description: `Having betrayed its allies, a wraith now seeks to escape the tomb with its newfound immortality.
    Tomb of Alar is a twin stick shooter worked on full time over the course of 4 weeks. The team goal was to deliver a polished game in a short timeframe.    
    `,
    image: `1S8hD6ltgHiwBnPqFEZGyZqS9bleXjxrl`,
    isDesign: false,
    isProgram: true,
    programText: `*Note:* I will not be writing detailed information code implementation here. This will be more about the code structure and how we worked as a team.

    Some things I did *gameplay wise* here and would love to talk about in person though are: 
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

You can always skip this part and go straight into the Vanagand tab, as that is the result of my learnings here. 

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
    description: `Methuselah is a topdown roguelike where the player fights as the force of the forest against the machines that want to tear it down.`,
    image: `1JpdAmKyaP-6qSRZ2PTm_9V_DTqQqplB_`,
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
    description: `Follow a girl and her dog as they explore an old apartment and learn of its past by solving puzzles.`,
    image: `1dpFGfVLrgH24yRtknFfHTUcD4e-aGbqX`,
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
    
    When input is received we rotated the base, unity does its matrix transformations and voilà, the camera goes where the player wants it to.
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
    description: `Bring a friend and find the city's hazardous treasures! 
    2 players control 3 robots, each with a different ability, clean up the city before the timer runs out!
    `,

    image: `1GqQ_-6TSdNQXa2Tnm_9PgVauPpEloSss`,
    isDesign: false,
    isProgram: true,
    programText: `This project was made over a total of 5 work days in 2022 and contains some propper abominations (including but not limited to: 5 badly made singletons). 

    I will not go over the code on this page, but on the bottom of this page I have included a git link to the entire unity project. 
    
    If asked I would love to go through the project, code review myself and roast past me.
    
     Here are the things I did in this project:
    - Robot movement
    - Camera movement
    - Robot swapping
    - Input handling 
    
    ##*A top down car game?*##
    “Robots are not humans”. A controversial statement if you were playing Detroit Become Human. Thankfully for me Project Plutonium operates under different bounds. 
    
    Getting the movement right for our game was a mixture of design and programming. In Project Plutonium the player(s) controls three, semi-humanoid robots. They are small and agile, but still go around on wheels. A mixture of car and human. When humanoid creatures move from forward to right they stop their forward momentum, turn to the right and then move forwards again. This also happens to be how movement feels in many games and how we first approached movement in ours. The player could move left, right, up and down and it felt… wrong. 
    
    After some tinkering with the movement a bit I started trying out more car-like movement and the result was an improvement. Now, top down car games exist but truthfully, I haven't played them. The cars in games I know can turn left and right, and how fast they turn is based on how fast they are moving. This all makes sense for cars, but not really for our characters. So I kept tinkering until I landed on movement that feels like a proper blend, fit for top down gameplay.
    
    !!http://drive.google.com/uc?export=view&id=1DpKSFfahQ06E_EG98r9ZzD3bTtb0pBwo!!

    What I ended up with was having the characters move only forward, they have fast acceleration and a turn based on the camera direction. This means that if the player presses “S” or the down key, the character will turn south.

    Here are some examples of other mechanics I made:

    !!http://drive.google.com/uc?export=view&id=1mOTY4vbUedc0U8KFkugosvGdDzC9BwS7!!
    Adaptive camera

    !!http://drive.google.com/uc?export=view&id=1nNxSkcnXtgq1IcohmrUbw64CT7Gru60X!!
    Robot swapping
    `,
    link: "https://github.com/LostmyCigar/ProjectPlutonium",
  },
  // {
  //   title: `The Solace`,
  //   content: `Programming, Team, Unreal, Puzzle`,
  //   image: `1zOmZokAN5ktXPU7RgntgDrV_rEw8WysJ`,
  //   isDesign: false,
  //   isProgram: true,
  //   programText: `Explore a misty forest as you solve puzzles and escape the island.`,
  //   link: "",
  // },
  {
    title: `Aastra`,
    content: `Solo, Small project, Gamemaker, Platformer`,
    description: `A platformer filled with tricky jumps. The very first game I made.`,
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
    description: `A unique game where you control a bouncing ball and platforms as you navigate through 6 very different levels.`,

    image: `1TcxxFg_hPrJemkzDMOx8au20TR1pclrC`,
    isDesign: true,
    isProgram: false,
    designText: `A challenging game where the player tries to maneuver both moving platforms and a bouncing ball at the same time. Using these simple mechanics I tried creating challenges based on different elements; timing, precision and a puzzle. It’s a short and simple game that could, with a few adjustments, work well on mobile.`,
    programText: "Some Program text here",
    linkDownload:
      "https://drive.google.com/file/d/1eveHOMsnAGDD3V2LAl2RvD9iPa0ja_yk/view?usp=sharing",
  },
  {
    title: `Behemoth Battles`,
    content: `Solo, Small project, Unity, Card battler`,
    description: `An attempt at bringing over a board game (created by myself) to the digital world in order to create and explore more transformative mechanics.`,

    image: `1nZvwU0EfLlZ4w8j3l1tRK_aUHzB1lr1w`,
    isDesign: true,
    isProgram: false,
    designText: `An attempt at turning a board game I designed into a computer game. A result of me wanting to explore some key mechanical differences in online and offline card games and a project I’m still working on from time to time. It is still at the stage where I am mostly translating the board game over to Unity, it is playable with the core mechanics implemented. Since it is made mainly for testing out mechanics, the balance is currently a bit off and it is lacking the visual clarity that the board game has. I am hoping to start testing with more transformative mechanics soon, such as cards being able to attack their own teammates for benefits and buffs.
    
    The goal is to make a game filled with synergies. Making a game where most of the mechanics are multiplicative and work well with each other. I decided to use a board game that I had already made so I could fully focus on the cards and their mechanics and enhance the gameplay through them. While it is a work in progress the balance is still way off. Behemoth Battles is a translation of a board game where the numbers and mechanics are a lot more grounded. To be able to bring in a lot of multiplicative mechanics I started with doubling the Hp of every monster card, hoping to avoid game states where one player snowballs too fast, making the outcome decided and predictable for too long. Unfortunately this has made the games start way too slow instead. The issue is that the core mechanics doesn’t support a game that wants to build up and evolve during a single session, they are more fitting of a game that stays similar the way throughout, the way the board game does. That being said, I don't think that I’ll change or even tune the core gameplay to align with the goal. This game is more of an experiment to see how I can create mechanics that lets players be creative, it doesn’t need to be good in any other area.
    
    !!http://drive.google.com/uc?export=view&id=1OPYq5SDtsPnzJ-f_ehCRJVwMuyb9s44W!!
    
    ##*Behemoth Battles: Board Game Rules*##
    Recruit, mutate and then attack with your behemoths.

    Like the evil genius you are, you have created a weapon so powerful that it guarantees world domination! The Gigantifier! Or, I mean, if it wasn’t for the fact that your, almost as evil, long time rival somehow managed to invent the same thing… To find out which one of you is most deserving of world domination you have decided to duel it out in the middle of nowhere. May the best supervillain win!

    ##*Goal of the game*##
    The goal is to prove that YOU’RE the one deserving the title “Evil Overlord Supreme”. The game ends when one player no longer has any behemoths in play.

    ##*Setting up*##
    Start with setting up the table the following way:
    !!http://drive.google.com/uc?export=view&id=12cYK4uIHCf4a5OrvvykoaeaCFuRKLjBf!!

    Choose the player starting.
    The player going second then starts with choosing which one of the three face-up behemoths they want to start with.
    The starting player then chooses one of the remaining two.
    Turn another behemoth card up so that there are two upwards facing cards.
    The starting player may then begin their first turn.
    !!http://drive.google.com/uc?export=view&id=1SR3eNo21ZAkfNJ96PloivU_ZS9Gp9Iff!!

    ##*Turn overview*##
    Choose the player starting.
    Eventual weapons are played before doing anything else during your turn.
    You can, during any time while it's your turn, recruit behemoths, buy Mutation Cards and Weapons as long as you have enough currency for it.
    The only required action during a turn is choosing an action from the Actionboard.

    ##*The Actionboard*##
    The Actionboard consists of three actions:

    Mutation Points
    -Gain Mutation points

    Recruitment points
    -Gain Recruitment points

    Attack
    -Attack enemy behemoths

    ##*On every action there are Power tokens.*##
    Power tokens decide how powerful each of the actions are. Any time an action is chosen the players must remove all Power tokens from that action and place 1 Power token on the actions not chosen during that turn.

    Example:
    !!http://drive.google.com/uc?export=view&id=10zuHv_wMz_pNpbd44dCC-NU6uAxh92_g!!
    
    There are 2 Power tokens on Attack, 1 on Mutation points and 0 on
    Recruitment points.

    Player 1 selects Attack.
    !!http://drive.google.com/uc?export=view&id=1DP-lLQlv7q72MbcrlszcO_OjH8p2lu2-!!

    Now that it is Player 2s turn, all the Power tokens are removed from Attack while 1 Power token has been added to both Recruitment points and Mutation points.
    Player 2 selects Recruitment points
    !!http://drive.google.com/uc?export=view&id=1pULQ51VYFd5jFHkm5PwMDayAYy8A_YXp!!

    Recruitment points therefore have 0 Power tokens during Player 1s turn. Attack and Mutations points have gained +1 Power token.

    For every Power token placed on an action it gains extra power.

    Mutation Points
    -Gain +1 Mutation point for every Power token.
    Example: There are 2 Power tokens on the Mutation points action when it is used: The player receives 1 + 2 Mutation points.

    Recruitment points
    -Gain +1 Recruitment point for every Power token

    Attack
    -Each power token grants the player the ability to attack with one additional behemoth. If the player using this action is missing sufficient behemoths to fully utilize this it; the player is granted +1 damage per additional Power token. Example: There are 2 Power tokens on the Attack action and the player using the action has 2 behemoths. The Action gives: (attack action) 1 + 2 (Power tokens ) attacks. Since the player only has 2 behemoths in play there is one redundant attack left. The player can therefore attack with both their behemoths and one of the attacks deals +1 damage. The player can choose which one of the attacks that deals extra damage. The same behemoth may not attack more than once per turn.
    When attacking, the defender does not deal damage back to the attacker unless it specified that it can.

    ##*Mutation Cards and Card slots*##
    !!http://drive.google.com/uc?export=view&id=1-LIXFlJdA8P9cm8-ssyDqS8pHuyJd2kA!!

    Mutation cards are bought using Mutation points. The cost is seen in the top-right corner. When a card has been bought, a new one takes its place in the shop from the deck. There should always be 3 Mutation cards available for players to purchase.
    
    A player can buy Mutation cards during any time as long as it is still their turn. When a mutation card is bought it is placed on an empty card slot. If the player has no card slot available they do not have the ability to buy Mutation Cards. Card slots can be found at the bottom of Behemoth cards
    !!http://drive.google.com/uc?export=view&id=1zn0Y2puc5AAhtVx7dArxsF7Yh-G4Aumj!!
    This behemoth has 1 available card slot.

    ##*Behemoths, recruitment and Weapons*##
    Behemoths always start with 20 Hp and 2 Atk unless something else is specified on the card. New behemoths can be recruited to fight by your side using Recruitment points. A player can recruit behemoths any time as long as it is their turn. The cost for recruiting behemoths is: 4 for the first behemoth. Then 5 and 6. The cost is based on how many behemoths the player has previously recruited and not on how many behemoths they have in active play. After 3 behemoths have been recruited in addition to the first one, the player can no longer recruit more. Recruitment points are then instead used for buying weapons.

    ##*Weapons*##
    After a player has recruited 3 behemoths they can no longer recruit more. Recruitment points are then used for buying weapons. Weapons are used at the beginning of a player's turn and can therefore not be bought and used the same turn. Weapons can be used no matter what action the player selects.

    ##*When a behemoths HP reaches 0*##
    When a behemoths Hp reaches 0 the card is placed at the bottom of the Behemoth card-pile. Any Mutation cards the behemoth had are placed to the side of the player. These cards can be brought back into the game for 2 Mutation points each (the normal cost is irrelevant). Only the player who lost the cards can buy them back. When one player no longer has any behemoths the game ends.
    
    GLHF!
    `,
    programText: "Some Program text here",
  },
  {
    title: `Synergy Shooter`,
    content: `Solo, Small project, Unity, Mobile`,
    description: `A mobile game created to explore the effect that synergies can have on player experience and overall enjoyment.`,

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
    description: `A game-jam game about a dude slicing things. When your only tool is a hammer, every problem becomes a nail. Well, when your arms are swords, every problem becomes slice-able.`,

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
