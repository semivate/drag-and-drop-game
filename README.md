[🇺🇦](./README.uk.md)

# 🧩 Drag-and-Drop

### [Live Demo](https://semivate.github.io/drag-and-drop-game/)

An interactive puzzle game developed using HTML5 Canvas in Adobe Animate with JavaScript and the CreateJS web engine.

The gameplay involves the player picking up a piece, rotating it correctly, and placing it in the appropriate spot in the upper area to complete the puzzle. The game features a fully autonomous infinite loop—after successfully completing the puzzle or refreshing the page, the pieces are automatically shuffled for a new round.

---

## Features (What's Already Done)

- The game automatically scans the scene at the start and identifies all objects present in it.
- Players can freely move, sort, and place parts anywhere within the workspace.
- When a part approaches the target, it is automatically snapped into place, locked, and becomes inactive.
- For PC players, rotating the active piece using the arrow keys or the A/D keys has been implemented.
- The randomizer assigns random initial positions and angles to the pieces.
- The gameplay is accompanied by three sound effects.
- When all pieces are collected, the game automatically starts a new round.

---

## Issues / Сhallenges

- Mobile control adaptation
- The game will need to be adapted for screens with different aspect ratios
- The game lacks UI design:
- Creating a database (array) that will load new sets of objects after each round to generate the game level.
- Layer conflict (zIndex); standard methods for bringing objects to the front cause coordinate errors.

---

## Learned

1.  Understanding why it is absolutely essential not to use the Cyrillic alphabet in code during development.
2.  Working with the lifecycle of mouse and keyboard events (Event Listeners), which protects the game from freezing.
3.  The difference between global scene coordinates and local layer/container coordinates in Adobe Animate.
4.  Нow to compensate for coordinate errors when resizing the Canvas by using the absolute mouse vector instead of the object's dynamic positions.
5.  Adapting the interface for smartphone portrait screens and working with the WebAudio API without overloading RAM.

---

## Technologies Used

- Adobe Animate (HTML5 Canvas API)
- JavaScript (Vanilla JS)
- CreateJS (EaselJS та SoundJS)
- Adobe Illustrator

---

## Preview

![Gameplay](./images/1.png)![Gameplay 2](./images/2.png)
