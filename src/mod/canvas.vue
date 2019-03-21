<template>
    <div>
        <div class="canvas">
            <canvas ref="canvas" height="500">
                不支持该浏览器
            </canvas>
        </div>
        <div class="canvas-square" ref="square"></div>
    </div>
</template>

<script>
export default {
    name: 'Canvas',

    mounted () {
        this.canvas = this.$refs.canvas
        this.init()
        this.moveSquare()
    },

    methods: {
        init () {
            let canvas = this.canvas

            if (!canvas.getContext) {
                return
            }

            let ctx = canvas.getContext('2d')

            // ctx.font = "50px sans-serif"
            // ctx.fillText("天若有情", 10, 100)
            // ctx.strokeText("天若有情", 10, 200)

            ctx.beginPath()
            ctx.moveTo(40, 200) //起始点
            let cp1x = 20, cp1y = 100  //控制点1
            let cp2x = 100, cp2y = 120  //控制点2
            let x = 200, y = 200 // 结束点
            //绘制二次贝塞尔曲线
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
            ctx.stroke()

            // ctx.beginPath()
            // ctx.rect(40, 200, 10, 10)
            // ctx.rect(cp1x, cp1y, 10, 10)
            // ctx.rect(cp2x, cp2y, 10, 10)
            // ctx.rect(x, y, 10, 10)
            // ctx.fill()
        },

        moveSquare () {
            let square = this.$refs.square,
                dist = 0

            this.move(square, dist)
        },

        move (square, dist) {
            requestAnimationFrame(() => {
                square.style.left = ++dist + 'px'
                if (dist < 50) {
                    this.move(square, dist)
                }
            })
        }
    },

    beforeDestroy () {
        this.canvas = null
    }
}
</script>

<style lang="scss" scoped>
@keyframes rotate{
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.canvas {
    transition: 1s;
    transform-origin: 250px 250px;
    animation: rotate 10s linear infinite;
}

.canvas-square {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: #abcdef;
    border-radius: 50%;
    transition: transform 1s ease, 1s ease-out;
}

.canvas-square:hover {
    border-radius: 0;
    transform: scale(1.5);
}
</style>
