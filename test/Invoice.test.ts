import { Beer } from "../src/Beer"
import { Invoice } from "../src/Invoice"
import { Water } from "../src/Water"
import { Whisky } from "../src/Whisky"

test("Deve criar uma fatura de compra", () => {
    const invoice = new Invoice()
    invoice.addItem(new Beer("Heineken", 10)) //taxa 10%
    invoice.addItem(new Whisky("Jack Daniels", 100)) //taxa 20%
    invoice.addItem(new Water("Voss", 5)) // taxa 0%

    const taxes = invoice.calculateTaxes()
    expect(taxes).toBe(21)
})