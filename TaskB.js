class Rotation {
  constructor(BTN1, BTN2, BTN3, Rotationbtn) {
    this.BTN1 = BTN1;
    this.BTN2 = BTN2;
    this.BTN3 = BTN3;
    this.Rotationbtn = Rotationbtn;

    this.Rotationbtn.addEventListener("click", () =>
      this.changeBackgroundColor()
    );
  }

  Rotationcircle() {
    const tempColor = this.BTN1.style.backgroundColor;
    this.BTN1.style.backgroundColor = this.BTN3.style.backgroundColor;
    this.BTN3.style.backgroundColor = this.BTN2.style.backgroundColor;
    this.BTN2.style.backgroundColor = tempColor;
  }

  changeBackgroundColor() {
    this.Rotationcircle();
  }
}

const BTN1 = document.getElementById("BTN1");
const BTN2 = document.getElementById("BTN2");
const BTN3 = document.getElementById("BTN3");
const RotationBtn = document.getElementById("Rotationbtn");

const rotationObject = new Rotation(BTN1, BTN2, BTN3, RotationBtn);
