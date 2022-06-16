class Bird extends BaseClass {
    constructor(x, y) {
        super(x, y, 40, 40);
        //adicionar imagem
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}
