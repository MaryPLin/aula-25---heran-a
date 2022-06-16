class Log extends BaseClass{
    constructor(x, y, height, angle){
        super(x, y, 15,height, angle);
        //adicionar imagem
        Matter.Body.setAngle(this.body,angle);
    }
}