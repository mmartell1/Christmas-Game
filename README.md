# Christmas-Game

# Concept:
	Overall objective of the game: save Christmas.
	Level 1: The goal of Level 1 is to collect points by collecting presents that bounce around the screen. There are 3 types of presents with varying speeds and point values. Each wave of presents contains a mix of the three.
	For each wave, out of the three types of presents, there is a specified type the player is told to collect, even if they are worth less than the fastest presents. Collecting a certain amount of that type of present for that wave increases your player’s max HP. This will help later in Level 2.
	The goal of Level 2 is to outlast Santa and save Christmas. The player has a health bar and their point counter from the previous level. Santa’s attacks are red presents that bounce around the screen which the player has to avoid.
	The presents lower both the player’s HP and points. Every couple of waves, the player has the option to regain either points or HP. Whichever they choose, for one wave, either green hearts or blue pluses will bounce around the screen along with red presents.
	The player has to make it to the end of the level by not dying. However, even if the player makes it to the end of the level, they still might not win the game. The player’s points have to be above a certain number in order to save Christmas.
	A difficulty level can be selected at the beginning of the game.

Levels and controls
For 1 player, the controls are the arrow keys. Left and right are used to move left and right, respectively, and the up arrow key is used to jump.
For 2 players, 1 person uses the arrow keys and the other uses WASD, with A and D corresponding to the left and right arrow keys, and the W to the up arrow key.

The first level consists of collecting presents for points.
The second level consists of using the points from the first level in order to outlast Santa and save Christmas.

Multiple Objectives
Level 1: The player has 2 objectives: to gain a higher max HP and to gain points.
Level 2: The player has to outlast Santa by keeping your HP above 0. They also have to “save Christmas” by keeping your points above a certain number.

Multiplayer Support
If played with 2 players, the first level is competitive, and the second level is cooperative.
In Level 1, the players compete to get the most points. In Level 2, they work together in order to outlast Santa. If their combined amount of points is high enough, then they “save Christmas”. Since the points are combined, the amount of points required to save Christmas goes up in multiplayer. If one of the players has died but Christmas is still saved, they are revived.

Characters, Objects and/or Sprites
Characters include Player 1, Player 2, and Santa.
Objects:
Level 1: There are 3 types of presents collected for points. The first is blue, and it’s the biggest and slowest present. It’s worth the least amount of points.
The second is green, smaller than the blue present, moves faster, and is worth more than the blue present.
The third is purple, and it’s the smallest, moves the fastest, and is worth the most.

Level 2: In the Santa fight, the player must avoid red presents. They are the size of the green presents. Speed varies based on game difficulty.
Earning back points/HP:
Health is earned by collecting small green hearts, points are earned by collecting small blue plus signs. The hearts and pluses have the same size and speed as the purple presents for the difficulty.

Overlay or status feedback
Level 1: There is a point counter for each player who is playing.There is also a full health bar, and the max HP possible can increase throughout this level.

Level 2: Max HP is fixed. The player has a health bar and a point counter. If there are 2 players, each player has an individual health bar, but the point counter counts the total number of points between them.

Experimental Feature
At the beginning of the game, a difficulty from Easy, Medium, or Difficult can be selected.

Level 1: With each increase in difficulty, the presents are worth less points and move faster.

Level 2: In Easy difficulty, the red presents have the same speed as the green presents in that difficulty. In Medium, they have the same speed as the purple presents for that difficulty. In Difficult, they are faster than the purple presents.
Opportunities to gain back points or health occur less frequently for each increase in difficulty.






TECHNICAL SPECIFICATION

1.	Features
Features include:
-Two distinct levels
o	First level is all presents spawning.
	Indicate by random which present out of three different types is the targeted one -> random number generation
	HP system -> simple counter. Check if zero after losing a health, then game over screen.
	Points system -> simple counter
	Counter system for collecting the correct presents
•	If collected present > indicated required, increase MAX HP
	Waves of presents
•	Order at which presents go in. How will the waves be defined? Random number generation, or predestined generation? Shouldn’t be too hard.
-	Player movements
o	Will be difficult to update player position with presents; if collision, gain points or lose HP. Will also be difficult to implement gravity. -> Check if in air and therefore start falling. Sprite work also tedious.
o	Should there be momentum??? Acceleration?
-	Spawning bouncing entities
o	6 types of entities in total, 4 are presents, 2 are power ups.
	Blue is biggest but slowest. Little points
	Green is medium and moderate speed. Medium points
	Purple is smallest but fastest. Most points
	Red is medium and speed based on difficulty. Deals damage
o	Hard to implement the sprites, hit box, and movement. What should their pathing look like?
-	Game difficulty
o	Will be determined by the selection screen, then shifts to gameplay after selection.
o	As difficulty increase, Red presents get more vigorous. Points for reward of each presents also decrease.
o	Will be difficult to determine the values at which the points for reward will decrease.
-	Multiplayer
o	Increase the amount of required points to win the game
o	Will be hard to add another set of counter system, hp system, etc
2.
If there are libraries for implementing gravity, controls, or sprites, it would be helpful.
Implementing those without a preexisting library is possible, just tedious and might require a lot of extra reading.

3.
The agility of presents and the way they are spawned in relationship to being accessed by the players is important, as the main objective of the game is to collect them.
Distinct levels are important; the game relies on the existence of the first level to impact the second level and therefore the outcome.
Player movements are important. How much mobility should the players have? Would it make it too easy if the character size is small?
	Multiplayer changes the dynamic of the game. By first competing, they then work together to gain the points. As one might die, the other one continues to carry the game.
	Difficulty is not hard to implement. Just hard to figure out the right values to make the game “easy,” “medium,” and “hard.”

4. The player(s) itself is not easy to program.
- need for sprite work (also applies to Santa, presents, and the Christmasy background). This should take around an hour. CAN BE REDUCED IF THERE IS A LIBRARY
- need for gravity – difficulty in checking if the player is on the ground or not. If not on ground, accelerate towards the earth. Should be less than an hour. CAN BE REDUCED IF THERE IS A LIBRARY
- need for movement inputs. Should be less than an hour. CAN BE REDUCED IF THERE IS A LIBRARY
- potential need for momentum and acceleration? i.e, does it take time for the character to go from moving to stopping? If so, should be less than an hour.


Hitboxes is not easy to program.
-  every moving element in the game has a hitbox.
- difficult in that there is a function to check every frame if the player’s hitbox is colliding with the hitbox of any of the items on the screen.
	- once it activates, something happens. Hp decreases, gain points, win the game, die, etc.

Overall, there aren’t any initial hard-hitting technical issues with the game.

5. global Int difficulty. After selection, 1 is easy, 2 is medium, 3 is hard
Global Int players. After selection, 1 is single, 2 is multiplayer.
Global arraylist presents. Include presents that are present on the screen
	Local Presents = {string type, int speed, int x-position, int y-position}
	Local String type; if type is “green,” the sprite work should be a green present with medium hitbox and gives medium points. If type is “red,” the sprite work should be a small red present and hurts. Etc.
	Local int speed; rate at which the presents change frame by frame
	Local int x-position AND y-position; their position on the screen
Local Int hp counter. If zero, game over.
Local Int 2hp counter. Matters only for multiplayer. Player one’s hp.
Local Int 3hp counter. Matters only for multiplayer. Player two’s hp
	If both are zero, game over.
	All hp counters can increase if specific presents collected > required.
Local int wanted-presents; does that ^^^
Int points counter. If more by the end of level two than required, win the game.
	Increase if multiplayer
Global Player player1 OR player 2 = {int hp, int points-counter, int wanted-presents, int x-position, int y-position}
	Pretty self-explanatory
	If collides with anything other than player 1 OR player 2, something happens
Local int waves; how many waves have passed. Lets keep it at a 5 max
Local presents spawned; resets to zero after each wave. Increases by one for each presents spawned, after reaching 20, spawn new wave.

6. functions()

Startwave() = if previous wave has died, start a new one. Once int waves = 5, go to level two
Startgame() = check if multiplayer, difficulty, then change the games accordingly
Collide() = check if hitbox of each player is colliding with an entity.
Win() = win screen. Only run if points > required points
Lose() = lose screen. If win() doesn’t become fulfilled.


STEPS TO PROGRAM
Frame of the game
Player movement
Implementing gravity
Hitboxes
Multiple entities
Counter systems – hp, points, required presents counter
Interactions between hitboxes
Spawning patterns - waves
Levels
Sprite works – first level no santa, second does
Multiplayer
Selection screen, game over screen
Soundtrack
Level difficulties
