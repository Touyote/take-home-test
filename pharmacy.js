export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
   static SignedDrug = Object.freeze({ HERBT : "Herbal Tea",
                                       FERX : "Fervex",
                                       MPILL : "Magic Pill",
                                       DAFAL : "Dafalgan",
                                       max_benef : 50,
                                       min_benef : 0
                                    })

  constructor(drugs = []) {
        this.drugs = drugs;

   };

  drugSignedLowerBenefit(drug) {
      const noneLower = [Pharmacy.SignedDrug.HERBT, Pharmacy.SignedDrug.FERX, Pharmacy.SignedDrug.MPILL];
      if (drug.benefit == 0 ||
            noneLower.includes(drug.name) == true) {
            return ;
        }
        if (drug.name == Pharmacy.SignedDrug.DAFAL) {
            drug.benefit -= (drug.benefit > Pharmacy.SignedDrug.min_benef ? 1 : 0);
        }
       drug.benefit -= (drug.benefit > Pharmacy.SignedDrug.min_benef ? 1 : 0);
    }

  drugSignedIncreaseBenefit(drug) {
        const noneIncrease = [Pharmacy.SignedDrug.HERBT, Pharmacy.SignedDrug.FERX];
    
        if (drug.benefit == Pharmacy.SignedDrug.max_benef ||
            noneIncrease.includes(drug.name) == false) {
            return;
        }
        if (drug.name == Pharmacy.SignedDrug.FERX) {
            drug.benefit += (drug.benefit < Pharmacy.SignedDrug.max_benef && drug.expiresIn < 11 ? 1 : 0);
            drug.benefit += (drug.benefit < Pharmacy.SignedDrug.max_benef && drug.expiresIn < 6 ? 1 : 0);
        }
        drug.benefit += (drug.benefit < Pharmacy.SignedDrug.max_benef ? 1 : 0); 
  }
    
  drugSignedExpire(drug) {
        if (drug.name == Pharmacy.SignedDrug.MPILL) {
            return ;
        }
        drug.expiresIn -= 1;
        if (drug.expiresIn >= 0)
          return ;
        if (drug.name == Pharmacy.SignedDrug.FERX) {
            drug.benefit -= drug.benefit;
            return ;
        }
        if (drug.name == Pharmacy.SignedDrug.HERBT) {
            drug.benefit += (drug.benefit < Pharmacy.SignedDrug.max_benef ? 1 : 0);
            return 
        }
        if (drug.name == Pharmacy.SignedDrug.DAFAL) {
            drug.benefit -= (drug.benefit > Pharmacy.SignedDrug.min_benef ? 1 : 0);
        }
        drug.benefit -= (drug.benefit > Pharmacy.SignedDrug.min_benef ? 1 : 0);
  }

  updateBenefitValue() {
        for (let i = 0; i < this.drugs.length; i++) {
            this.drugSignedLowerBenefit(this.drugs[i]);
            this.drugSignedIncreaseBenefit(this.drugs[i]);
            this.drugSignedExpire(this.drugs[i]);
        }    
        return this.drugs;
    }
}
