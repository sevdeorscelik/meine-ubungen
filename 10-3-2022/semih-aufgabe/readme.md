# Erweitern von Klassen
#### 1. Angestelltenklasse
- Erstellen Sie eine Klasse `Employee`, die folgende Eigenschaften in dem Constructor hat:
  - `id` des Mitarbeiters als Zahl
  - Vorname" des Angestellten als String
  - Nachname" des Mitarbeiters als String
  - taxId" als Zahl
  - `Gehalt` als Zahl
- Die Klasse `Employee` sollte eine Methode `generatePaySlip` haben, die zurückgibt:
```
       Mitarbeiter-ID: id
       Name: vorname nachname
       Steuer-ID: taxId
       Pay: monthlySalary --> muss auf der Basis des Gehalts berechnet werden
```
#### 2. Manager Klasse
- Erstellen Sie eine `Manager` Klasse, die die `Employee` Klasse erweitert.
- Die "Manager"-Klasse muss ein Array "ManagedEmployees" hinzufügen.
- Die Klasse `Manager` benötigt zwei Methoden:
  - `addManagedEmployee`, um einen verwalteten Mitarbeiter in das Array `managedEmployees` aufzunehmen
  - `removeManagedEmployee`, um einen verwalteten Mitarbeiter aus dem Array `managedEmployees` zu entfernen
---
# Extending Classes
#### 1. Employee Class
- Create an `Employee` class which accepts:
  - `id` of the employee as a number
  - `firstName` of the employee as a string
  - `lastName` of the employee as as string
  - `taxId` as a number
  - `salary` as a number
- The `Employee` class should have a `generatePaySlip` method which returns:
```
       Employee ID: id
       Name: firstName lastName
       Tax ID: taxId
       Pay: monthlySalary --> will need to be calculated based off of salary
```
#### 2. Manager Class
- Create a `Manager` class which extends the `Employee` class
- The `Manager` class will need the addition of a `managedEmployees` array
- The `Manager` class will need two methods:
  - `addManagedEmployee` to add a managed employe to the `managedEmployees` array
  - `removeManagedEmployee` to remove a managed employee from the `managedEmployees` array