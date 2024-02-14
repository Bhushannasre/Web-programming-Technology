import { Computer } from "./Computer";
class HP extends Computer {
  constructor(name, company) {
    super(name);
    this.company = company;
  }
  LogIn() {
    console.log("you are logged into a Hp" + this.name);
  }
}
export default HP;
