class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];
    return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
  }
}