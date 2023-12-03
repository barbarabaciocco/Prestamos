class Prestamo {
    constructor(monto, interes, plazo) {
        this.monto = monto || 0
        this.interes = interes || 0
        this.plazo = plazo || 0
    }
    
    calcularCuota() {
        let cuota = (this.monto * this.interes) / this.plazo
        return cuota
    }
}