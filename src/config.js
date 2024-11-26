import Phaser from "phaser";
import PreLoadingScene from "./scenes/preLoadingScene.js";
import LoadingScene from "./scenes/loadingScene.js";
import GameScene from "./scenes/gameScene.js";
import GameOverScene from "./scenes/gameOverScene.js";

const config = {
  type: Phaser.CANVAS,
  width: 400,
  height: 600,
  canvas: document.getElementById("game-canvas"),
  backgroundColor: "#404856",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  scenes: [PreLoadingScene, LoadingScene, GameScene, GameOverScene],
};

export default config;
