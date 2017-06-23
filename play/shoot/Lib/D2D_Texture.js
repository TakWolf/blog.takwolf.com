x//=======================================================
//
// EM-X for HTML5 Canvas - v0.0.3
//
// Powered by TakWolf - takgdx@gmail.com
// http://www.takgdx.com/emx-for-html5-canvas
//
//=======================================================
// -2013.10.17-
//=======================================================
// D2D_精灵类
//=======================================================
/**
 * D2D_精灵类
 * @param texture 图片实例
 * @param srcX 截取顶点x
 * @param srcY 截取顶点y
 * @param srcWidth 截取宽度
 * @param srcHeight 截取高度
 * @constructor
 */
function D2D_Sprite(texture,srcX,srcY,srcWidth,srcHeight) {

    /**
     * 纹理参数
     */
    this.texture = texture;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcWidth = srcWidth;
    this.srcHeight = srcHeight;
    /**
     * 中心点
     */
    this.originX = 0;
    this.originY = 0;
    /**
     * 透明度
     */
    this.alpha = 1;

}

/**
 * 显示
 */
D2D_Sprite.prototype.draw = function(engine) {
    //取上下文
    var context = engine.getContext();
    //保存状态
    context.save();

    //设置透明度
    context.globalAlpha = this.alpha;

    /**
     * 渲染在(0,0)
     * @param engine 引擎句柄
     */
    if (arguments.length == 1) {
        context.drawImage(
            this.texture.getDrawHandle(),
            this.srcX,
            this.srcY,
            this.srcWidth,
            this.srcHeight,
            0-this.originX,
            0-this.originY,
            this.srcWidth,
            this.srcHeight
        );
    }
    /**
     * 渲染在(x,y)
     * @param engine 引擎句柄
     * @param x 显示位置x
     * @param y 显示位置y
     */
    else if (arguments.length == 3) {
        context.drawImage(
            this.texture.getDrawHandle(),
            this.srcX,
            this.srcY,
            this.srcWidth,
            this.srcHeight,
            arguments[1]-this.originX, //坐标X
            arguments[2]-this.originY,  //坐标Y
            this.srcWidth,
            this.srcHeight
        );
    }
    /**
     * 显示_范围缩放
     * @param engine 引擎句柄
     * @param x 显示位置x
     * @param y 显示位置y
     * @param scaleX 横向比例
     * @param scaleY 纵向比例
     */
    else if (arguments.length == 5) {
        //矩阵变换
        context.translate(arguments[1],arguments[2]);
        context.scale(arguments[3],arguments[4]);
        //绘制
        context.drawImage(
            this.texture.getDrawHandle(),
            this.srcX,
            this.srcY,
            this.srcWidth,
            this.srcHeight,
            0-this.originX,
            0-this.originY,
            this.srcWidth,
            this.srcHeight
        );
    }
    /**
     * @param engine 引擎句柄
     * @param x 显示位置x
     * @param y 显示位置y
     * @param angle 旋转角度
     * @param scaleX 横向比例
     * @param scaleY 纵向比例
     */
    else if (arguments.length == 6) {
        //矩阵变换
        context.translate(arguments[1],arguments[2]);
        context.rotate(arguments[3]);
        context.scale(arguments[4],arguments[5]);
        //绘制
        context.drawImage(
            this.texture.getDrawHandle(),
            this.srcX,
            this.srcY,
            this.srcWidth,
            this.srcHeight,
            0-this.originX,
            0-this.originY,
            this.srcWidth,
            this.srcHeight
        );
    }

    //恢复状态
    context.restore();
};

/**
 * 销毁
 * 实际不执行销毁，该过程由jsGC管理器执行
 * 为保持接口统一，保留该函数
 */
D2D_Sprite.prototype.dispose = function() {

    this.texture = null;
    this.srcX = null;
    this.srcY = null;
    this.srcWidth = null;
    this.srcHeight = null;
    this.originX = null;
    this.originY = null;
    this.alpha = null;

};

/**
 * 置透明度
 * 范围为0-1
 */
D2D_Sprite.prototype.setAlpha = function(alpha) {
    this.alpha = alpha;
};

/**
 * 取透明度
 */
D2D_Sprite.prototype.getAlpha = function() {
    return this.alpha;
};

/**
 * 置中心点
 */
D2D_Sprite.prototype.setOrigin = function(originX,originY) {
    this.originX = originX;
    this.originY = originY;
};

/**
 * 取中心点X
 */
D2D_Sprite.prototype.getOriginX = function() {
    return this.originX;
};

/**
 * 取中心点Y
 */
D2D_Sprite.prototype.getOriginY = function() {
    return this.originY;
};

/**
 * 取顶点x
 */
D2D_Sprite.prototype.getSrcX = function() {
    return this.srcX;
};

/**
 * 取顶点y
 */
D2D_Sprite.prototype.getSrcY = function() {
    return this.srcY;
};

/**
 * 取宽度
 */
D2D_Sprite.prototype.getWidth = function() {
    return this.srcWidth;
};

/**
 * 取高度
 */
D2D_Sprite.prototype.getHeight = function() {
    return this.srcHeight;
};

/**
 * 设置矩形区域
 */
D2D_Sprite.prototype.setSrcRect = function(srcX,srcY,srcWidth,srcHeight) {
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcWidth = srcWidth;
    this.srcHeight = srcHeight;
};

/**
 * 取纹理
 */
D2D_Sprite.prototype.getTexture = function() {
    return this.texture;
};

/**
 * 置纹理
 */
D2D_Sprite.prototype.setTexture = function(texture) {
    this.texture = texture;
};
