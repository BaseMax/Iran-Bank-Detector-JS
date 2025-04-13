const banks = {
  '603799': 'بانک ملی',
  '603770': 'بانک صادرات',
  '603769': 'بانک کشاورزی',
  '589210': 'بانک سپه',
  '610433': 'بانک ملت',
  '628023': 'بانک مسکن',
  '627648': 'بانک توسعه صادرات',
  '627961': 'بانک صنعت و معدن',
  '627353': 'بانک تجارت',
  '589463': 'بانک رفاه',
  '639347': 'بانک پاسارگاد',
  '627412': 'بانک اقتصاد نوین',
  '622106': 'بانک پارسیان',
  '627488': 'بانک کارآفرین',
  '621986': 'بانک سامان',
  '639346': 'بانک سینا',
  '639607': 'بانک سرمایه',
  '502806': 'بانک شهر',
  '502938': 'بانک دی',
  '627381': 'بانک انصار',
  '639599': 'بانک قوامین'
};

const BankApp = {
  cardNumber: "",
  get bankName() {
    const bin = this.cardNumber.slice(0, 6);
    return banks[bin] || "";
  },
  view() {
    return m("div.container", [
      m("input", {
        type: "text",
        maxlength: 16,
        placeholder: "شماره کارت را وارد کنید",
        class: this.cardNumber.length >= 6 && !this.bankName ? "invalid" : "",
        oninput: (e) => {
          this.cardNumber = (e.target).value.replace(/\D/g, "");
        },
        value: this.cardNumber
      }),
      m("div.bank-name", this.bankName || (this.cardNumber.length >= 6 ? "بانک نامشخص" : ""))
    ]);
  }
};

m.mount(document.getElementById("app"), BankApp);
