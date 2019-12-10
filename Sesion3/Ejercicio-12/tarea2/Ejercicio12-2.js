class GeoLocalizacion {
    constructor() {
        this.latitud = "";
        this.longitud = "";
        this.accuracy = "";
        this.altitude = "";
        this.altAccur = "";
        this.heading = "";
        this.speed = "";
    }


    getValues(position) {
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
        this.accuracy = position.coords.accuracy;
        this.altitude = position.coords.altitude;
        this.altAccur = position.coords.altitudeAccuracy;
        this.heading = position.coords.heading;
        this.speed = position.coords.speed;

        this.mostrar();
        
    }

    mostrar() {

        var ubicacion = document.getElementById('ubicacion');
        var datos = '';
        datos += 'Latitud: ' + this.latitud + ' grados<br>';
        datos += 'Longitud: ' + this.longitud + ' grados<br>';
        datos += 'Exactitud: ' + this.accuracy + ' metros<br>';
        datos += 'Altitud: ' + this.altitude + ' metros.<br>';
        datos += 'Exactitud de la altitud: ' + this.altAccur + ' metros<br>';
        datos += 'Rumbo: ' + this.heading + ' grados<br>';
        datos += 'Velocidad: ' + this.speed + ' metros/segundo<br>';
        ubicacion.innerHTML = datos;

    }

    getErrores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }
   
    execute() {
        navigator.geolocation.getCurrentPosition(this.getValues.bind(this), this.getErrores);     
    }
}

var g = new GeoLocalizacion();
