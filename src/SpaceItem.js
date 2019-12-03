class SpaceItem {
  constructor(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity || 1;
  }

  statement(){
    if (this.quantity > 1){
      this.name = this.name + "s"
    }
    return(`${this.quantity} ${this.name} - $${parseFloat(this.price * this.quantity).toFixed(2)}`)
  }

  totalCost(){
    return (this.price * this.quantity)
  }
}
