/**
 * 子弹类
 */
function Bullet(x,y,speed) {
	this.ani_bullet = new D2D_Animation(tex_bullet,8,1,30,0,0,32,32);
    this.ani_bullet.setOrigin(16,16);
	this.x = x;
	this.y = y;
	this.speed = speed;

	this.state = "飞行";

    //碰撞盒
	this.box = new D2D_RectBox(this.x,this.y,24,24);
	this.box.setOrigin(12,12);

}

/**
 * 更新
 */
Bullet.prototype.update = function(dt,arrEnemy,arrBomb) {
	//计算位置
	this.y -= this.speed;
	//消失判断
	if(this.y 