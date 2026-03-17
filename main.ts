scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    effects.confetti.endScreenEffect()
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 0
    vy = -50
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door0, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    tiles.placeOnRandomTile(mySprite, tileUtil.door0)
    if (tileUtil.currentTilemap() == level_one) {
        mySprite.x += 16
    } else {
        mySprite.x += -16
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, vx, vy)
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door2, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door2)
    tiles.placeOnRandomTile(mySprite, tileUtil.door2)
    if (tileUtil.currentTilemap() == level_2) {
        mySprite.x += 16
    } else {
        mySprite.x += -16
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = -50
    vy = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`baseTransparency16`, function (sprite, location) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 50
    vy = 0
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
tileUtil.onMapLoaded(function (tilemap2) {
    if (tileUtil.currentTilemap() == level_2) {
        tileUtil.coverAllTiles(tileUtil.door0, assets.tile`myTile3`)
        mySprite2 = sprites.create(img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b e e 4 4 4 4 4 f b b f . 
            . . f 4 4 4 e d d d b f e f . . 
            . . f e 4 4 e d d d d c 4 e . . 
            . . . f e e d d b d b b f e . . 
            . . . f f 1 d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleRedCrystal)
        mySprite2.follow(mySprite, 60)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 e . . . . 
            . . . . . 2 2 2 2 d 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 e f f c c . 
            . . . . e e 2 2 e f f f f b c . 
            . . e e e f e e f f f f f d c . 
            . e e 2 2 d f c b 4 4 c 1 b c . 
            . e e 2 2 b c 4 1 1 4 c c . . . 
            . b 1 1 b e c 4 4 4 4 c . . . . 
            . . f f f d d 4 4 4 b c d . . . 
            e e f f f d d c c c c d d . . . 
            e e e f f f f c c c . . . . . . 
            e e . . . . f f f . . . . . . . 
            . . . . . . f f f f . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite3, sprites.castle.rock2)
        mySprite3.follow(mySprite, 60)
        mySprite4 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite4, sprites.castle.rock0)
        mySprite4.follow(mySprite, 60)
        mySprite5 = sprites.create(img`
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 e f f . 
            . f f 4 4 f b f 4 4 e f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f 4 d d d d f . . . 
            . . . f e e 4 4 4 e f . . . 
            . . . 4 d d e 3 3 3 f . . . 
            . . . e d d e 3 3 3 f . . . 
            . . . f e e f 6 6 6 f . . . 
            . . . . f f f f f f . . . . 
            . . . . . f f f . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite5, sprites.dungeon.collectibleInsignia)
        mySprite5.follow(mySprite, 60)
    } else if (tileUtil.currentTilemap() == level3) {
        multilights.toggleLighting(true)
        multilights.addLightSource(mySprite, 10)
    } else {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 0
    vy = 50
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 200)
    sprites.destroy(sprite)
})
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let projectile: Sprite = null
let vy = 0
let vx = 0
let level3: tiles.TileMapData = null
let level_2: tiles.TileMapData = null
let level_one: tiles.TileMapData = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b e e 4 4 4 4 4 f b b f . 
    . . f 4 4 4 e d d d b f e f . . 
    . . f e 4 4 e d d d d c 4 e . . 
    . . . f e e d d b d b b f e . . 
    . . . f f 1 d 1 d 1 1 f f . . . 
    . . . . . f f f b b f . . . . . 
    `, SpriteKind.Enemy)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . e e e f e e f f f f f d c . 
    . e e 2 2 d f c b 4 4 c 1 b c . 
    . e e 2 2 b c 4 1 1 4 c c . . . 
    . b 1 1 b e c 4 4 4 4 c . . . . 
    . . f f f d d 4 4 4 b c d . . . 
    e e f f f d d c c c c d d . . . 
    e e e f f f f c c c . . . . . . 
    e e . . . . f f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Enemy)
level_one = tilemap`level1`
level_2 = tilemap`level8`
level3 = tilemap`level7`
tiles.setCurrentTilemap(level_one)
tileUtil.connectMaps(level_one, level_2, MapConnectionKind.Door1)
tileUtil.connectMaps(level_2, level3, MapConnectionKind.Door2)
tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass1)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2.follow(mySprite, 45)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
tiles.placeOnRandomTile(mySprite3, sprites.castle.tileDarkGrass1)
mySprite3.follow(mySprite, 45)
