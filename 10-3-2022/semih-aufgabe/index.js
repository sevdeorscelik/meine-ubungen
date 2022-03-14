//1

class Employee {
    constructor(id, vorname, nachname, taxId, gehalt){
        this.id = id,
        this.vorname = vorname,
        this.nachname = nachname,
        this.taxId = taxId
        this.gehalt = gehalt
    }

    generatePaySlip(){
        return `
       Mitarbeiter-ID: ${this.id}
       Name: ${this.vorname} ${this.nachname}
       Steuer-ID: ${this.taxId}
       Pay: ${this.gehalt} Euro
       `
    }
}

const employee1 = new Employee(14, 'sevde',  'örscelik', 25, 2800)
console.log(employee1);
console.log(employee1.generatePaySlip());



//2

class Manager extends Employee{
    


}
