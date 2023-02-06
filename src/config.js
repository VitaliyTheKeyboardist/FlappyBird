class Config {
    canvas = {
        id: 'game',
        width: 480,
        height: 320,

    }

    spriteSheet = {
        width: 686,
        height: 428,
        src: 'assets/spritesheet.png'
    }

    gravity = 100

    bird = {
        x: 50,
        y: 100,
        width: 34,
        height: 26,

        flapSpeed: 30,

        frames: [
            {
                x: 276,
                y: 112,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 166,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            }
            
        ]
    }
}