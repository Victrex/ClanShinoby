
CREATE TABLE Talla(
idTalla INT IDENTITY(1,1) PRIMARY KEY,
talla VARCHAR(5) NOT NULL
);

CREATE TABLE Camisa(
idCamisa INT IDENTITY(1,1) PRIMARY KEY,
idTalla INT NOT NULL,
existencias INT NOT NULL,
FOREIGN KEY (idTalla) REFERENCES Talla(idTalla)
);

CREATE TABLE Inventario(
idInventario INT IDENTITY(1,1) PRIMARY KEY,
noPetos INT NOT NULL,
noCascos INT NOT NULL,
noPalchaguis INT NOT NULL,
noDomis INT NOT NULL,
idCamisa INT NOT NULL,
FOREIGN KEY (idCamisa) REFERENCES Camisa(idCamisa)
);

CREATE TABLE Cinta(
idCinta INT IDENTITY(1,1) PRIMARY KEY,
color VARCHAR(30) NOT NULL,
kup VARCHAR(2) NOT NULL
);

CREATE TABLE Genero(
idGenero INT IDENTITY(1,1) PRIMARY KEY,
genero VARCHAR(30) NOT NULL
);

CREATE TABLE EstadoCivil(
idEstadoCivil INT IDENTITY(1,1) PRIMARY KEY,
estadoCivil VARCHAR(30) NOT NULL
);

CREATE TABLE TipoSangre(
idTipoSangre INT IDENTITY(1,1) PRIMARY KEY,
tipoSangre VARCHAR(5) NOT NULL
);

CREATE TABLE Celular(
idCelular INT IDENTITY(1,1) PRIMARY KEY,
noCelular VARCHAR(20) NOT NULL
);

CREATE TABLE Alumno(
idAlumno INT IDENTITY(1,1) PRIMARY KEY,
primerNombre VARCHAR(100) NOT NULL,
segundoNombre VARCHAR(100),
primerApellido VARCHAR(100) NOT NULL,
segundoApellido VARCHAR(100),
idGenero INT NOT NULL,
fechaNacimiento DATE NOT NULL,
direccion VARCHAR(250) NOT NULL,
ciudad VARCHAR(100) NOT NULL,
telefono VARCHAR(10),
idCelular INT NOT NULL,
peso INT NOT NULL,
idEstadoCivil INT NOT NULL,
idTipoSangre INT NOT NULL,
enfermedadCronica VARCHAR(100),
idCinta INT NOT NULL,
FOREIGN KEY (idCelular) REFERENCES Celular(idCelular),
FOREIGN KEY (idGenero) REFERENCES Genero(idGenero ),
FOREIGN KEY (idEstadoCivil) REFERENCES EstadoCivil(idEstadoCivil),
FOREIGN KEY (idTipoSangre) REFERENCES TipoSangre(idTipoSangre),
FOREIGN KEY (idCinta) REFERENCES Cinta(idCinta )
);
ALTER TABLE Alumno ADD codigoAlumno VARCHAR(20) NOT NULL;


CREATE TABLE Estado(
idEstado INT IDENTITY(1,1) PRIMARY KEY,
estado VARCHAR(10) NOT NULL,
);

CREATE TABLE EstadoAlumno (
idEstadoAlumno INT IDENTITY(1,1) PRIMARY KEY,
idAlumno INT NOT NULL,
idEstado INT NOT NULL,
FOREIGN KEY (idAlumno) REFERENCES Alumno(idAlumno),
FOREIGN KEY (idEstado) REFERENCES Estado(idEstado)
);


CREATE TABLE Monto (
idMonto INT IDENTITY(1,1) PRIMARY KEY,
monto FLOAT(2) NOT NULL
);


CREATE TABLE EstadoPago (
idEstadoPago INT IDENTITY(1,1) PRIMARY KEY,
estadoPago VARCHAR(20) NOT NULL
);


CREATE TABLE PagoMensual(
idPagoMensual INT IDENTITY(1,1) PRIMARY KEY,
fechaPago DATE NOT NULL,
idAlumno INT NOT NULL,
idMonto INT NOT NULL,
montoPagado FLOAT(2) NOT NULL,
montoPendiente FLOAT(2) NOT NULL,
idEstadoPago INT NOT NULL,
FOREIGN KEY (idAlumno) REFERENCES Alumno(idAlumno),
FOREIGN KEY (idMonto) REFERENCES Monto(idMonto),
FOREIGN KEY (idEstadoPago) REFERENCES EstadoPago(idEstadoPago)
);

CREATE TABLE EstadoCamisa(
idEstadoCamisa INT IDENTITY(1,1) PRIMARY KEY,
estadoCamisa VARCHAR(20) NOT NULL
);

CREATE TABLE Inscripcion(
idInscripcion INT IDENTITY(1,1) PRIMARY KEY,
idAlumno INT NOT NULL,
fechaInscripcion DATE NOT NULL,
FOREIGN KEY (idAlumno) REFERENCES Alumno(idAlumno),
);

CREATE TABLE TipoExamen(
idTipoExamen INT IDENTITY(1,1) PRIMARY KEY,
tipoExamen VARCHAR(15) NOT NULL
);

CREATE TABLE Examen(
idExamen INT IDENTITY(1,1) PRIMARY KEY,
idAlumno INT NOT NULL,
fechaExamen DATE NOT NULL,
resultadoExamen INT NOT NULL,
rangoActual INT NOT NULL,
rangoObtenido INT NOT NULL,
monto FLOAT NOT NULL,
estadoPago VARCHAR(20) NOT NULL,
idTipoExamen INT NOT NULL,
FOREIGN KEY (idAlumno) REFERENCES Alumno(idAlumno),
FOREIGN KEY (rangoActual ) REFERENCES Cinta(idCinta),
FOREIGN KEY (rangoObtenido ) REFERENCES Cinta(idCinta),
FOREIGN KEY (idTipoExamen) REFERENCES TipoExamen(idTipoExamen)
);

CREATE TABLE Tutor(
idTutor INT IDENTITY(1,1) PRIMARY KEY,
primerNombre VARCHAR(100) NOT NULL,
segundoNombre VARCHAR(100),
primerApellido VARCHAR(100) NOT NULL,
segundoApellido VARCHAR(100),
idCelular INT NOT NULL,
correoElectronico VARCHAR(100),
FOREIGN KEY (idCelular) REFERENCES Celular(idCelular)
);

CREATE TABLE TutorAlumno(
idAlumno INT NOT NULL,
idTutor INT NOT NULL,
PRIMARY KEY(idAlumno, IdTutor),
FOREIGN KEY (idAlumno) REFERENCES Alumno(idAlumno),
FOREIGN KEY(idTutor) REFERENCES Tutor(idTutor)
);

CREATE TABLE Torneo(
idTorneo INT IDENTITY (1,1) PRIMARY KEY,
fecha DATE NOT NULL,
lugar VARCHAR(250) NOT NULL
);

CREATE TABLE Resultado(
idResultado INT IDENTITY(1,1) PRIMARY KEY,
ronda INT NOT NULL,
puntos INT NOT NULL,
gamjeom INT NOT NULL
);

CREATE TABLE Pelea(
idPelea INT IDENTITY(1,1) PRIMARY KEY,
idResultado INT NOT NULL,
noPelea INT NOT NULL,
FOREIGN KEY (idResultado) REFERENCES Resultado(idResultado)
);

CREATE TABLE Contrincante(
idContrincante INT IDENTITY(1,1) PRIMARY KEY,
primerNombre VARCHAR(100) NOT NULL,
primerApellido VARCHAR(100) NOT NULL,
escuela VARCHAR(100) NOT NULL,
idPelea INT NOT NULL,
FOREIGN KEY (idPelea) REFERENCES Pelea(idPelea)
);

CREATE TABLE ParticipanteTorneo(
idParticipanteTorneo INT IDENTITY(1,1) PRIMARY KEY,
idAlumno INT NOT NULL,
idTorneo INT NOT NULL,
idPelea INT NOT NULL,
idContrincante INT NOT NULL,
FOREIGN KEY (idAlumno) REFERENCES Alumno(idAlumno),
FOREIGN KEY (idTorneo) REFERENCES Torneo(idTorneo),
FOREIGN KEY (idPelea) REFERENCES Pelea(idPelea),
FOREIGN KEY (idContrincante) REFERENCES Contrincante(idContrincante)
);


/*INSERTS PARA LOS CATALOGOS*/
INSERT INTO EstadoPago (estadoPago) VALUES ('Pago');
INSERT INTO EstadoPago (estadoPago) VALUES ('Pendiente');


INSERT INTO TipoExamen (tipoExamen) VALUES ('Inferior');
INSERT INTO TipoExamen (tipoExamen) VALUES ('Superior');

INSERT INTO Estado (estado) VALUES ('Activo');
INSERT INTO Estado (estado) VALUES ('Ausente');

INSERT INTO EstadoPago (estadoPago) VALUES ('Entregado');
INSERT INTO EstadoPago (estadoPago) VALUES ('Pendiente');

INSERT INTO Monto (monto) VALUES (300.00);

INSERT INTO EstadoCamisa (estadoCamisa) VALUES ('Entregado');
INSERT INTO EstadoCamisa (estadoCamisa) VALUES ('Pendiente');

INSERT INTO TipoSangre (tipoSangre) VALUES ('A');
INSERT INTO TipoSangre (tipoSangre) VALUES ('B');
INSERT INTO TipoSangre (tipoSangre) VALUES ('AB');
INSERT INTO TipoSangre (tipoSangre) VALUES ('O');


INSERT INTO EstadoCivil (estadoCivil) VALUES ('Soltero(a)');
INSERT INTO EstadoCivil (estadoCivil) VALUES ('Casado(a)');
INSERT INTO EstadoCivil (estadoCivil) VALUES ('Divorciado(a)');
INSERT INTO EstadoCivil (estadoCivil) VALUES ('Viudo(a)');

INSERT INTO Genero (genero) VALUES ('Masculino');
INSERT INTO Genero (genero) VALUES ('Femenino');
INSERT INTO Genero (genero) VALUES ('Otro');

INSERT INTO Cinta (color, kup) VALUES ('Blanco', '9');
INSERT INTO Cinta (color, kup) VALUES ('Blanco-Amarillo', '8');
INSERT INTO Cinta (color, kup) VALUES ('Amarillo', '7');
INSERT INTO Cinta (color, kup) VALUES ('Amarillo-Negro', '6');
INSERT INTO Cinta (color, kup) VALUES ('Verde', '5');
INSERT INTO Cinta (color, kup) VALUES ('Cafe', '4');
INSERT INTO Cinta (color, kup) VALUES ('Azul', '3');
INSERT INTO Cinta (color, kup) VALUES ('Azul-Rojo', '2');
INSERT INTO Cinta (color, kup) VALUES ('Rojo', '1');
INSERT INTO Cinta (color, kup) VALUES ('Negro', '');

INSERT INTO Talla (talla) VALUES ('XS');
INSERT INTO Talla (talla) VALUES ('S');
INSERT INTO Talla (talla) VALUES ('M');
INSERT INTO Talla (talla) VALUES ('L');
INSERT INTO Talla (talla) VALUES ('XL');
INSERT INTO Talla (talla) VALUES ('XXL');
INSERT INTO Talla (talla) VALUES ('XXXL');





/* TRIGGER PARA CALCULAR EL MONTOPENDIENTE QUE ES LA RESTA DE PAGOENTREGADO - MONTO*/
CREATE TRIGGER calcularMontoPendiente ON PagoMensual
AFTER INSERT
AS
BEGIN
    UPDATE PagoMensual
    SET montoPendiente = (SELECT monto FROM Monto WHERE idMonto = inserted.idMonto) - inserted.montoPagado
    FROM PagoMensual
    INNER JOIN inserted ON PagoMensual.idPagoMensual = inserted.idPagoMensual
END;
ALTER TABLE NombreDeTuTabla ENABLE TRIGGER NombreDeTuTrigger;

/* TRIGGER PARA VERIFICAR QUE SI LA RESTA DE PAGOENTREGADO - MONTO = 0 PONGA QUE ESTADOPAGO = 1 DE ENTREGADO
O CASO CONTRARIO 2 =  PENDIENTE*/
CREATE TRIGGER trg_actualizar_estado_pago
ON PagoMensual
AFTER INSERT, UPDATE
AS
BEGIN
    IF UPDATE(montoPagado) OR UPDATE(idMonto)
    BEGIN
        UPDATE PagoMensual
        SET montoPendiente = (SELECT monto FROM Monto WHERE Monto.idMonto = PagoMensual.idMonto) - PagoMensual.montoPagado,
        idEstadoPago = CASE 
                            WHEN ((SELECT monto FROM Monto WHERE Monto.idMonto = PagoMensual.idMonto) - PagoMensual.montoPagado) = 0 THEN 1 
                            ELSE 2 
                        END
        FROM PagoMensual
        INNER JOIN inserted ON inserted.idPagoMensual = PagoMensual.idPagoMensual
    END
END;

--TABLA QUE LLEVA el HISTORIAL DE PAGOS REALIZADOS--
CREATE TABLE HistorialPagos(
   idHistorialPagos INT IDENTITY(1,1) PRIMARY KEY,
   idAlumno INT NOT NULL,
   fecha DATE NOT NULL,
   montoPagado FLOAT(2) NOT NULL,
   FOREIGN KEY (idAlumno) REFERENCES Alumno(idAlumno),
);

--VISTA QUE ME DE LOS ULTIMOS 10 PAGOS REALIZADOS
CREATE TABLE Empresa(
	idEmpresa INT IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(100)

)

CREATE TABLE Usuario(
	idUsuario INT IDENTITY (1,1) PRIMARY KEY ,
	usuario VARCHAR(25),
	primerNombre VARCHAR(100),
	primerApellido VARCHAR(100),
	correo VARCHAR(150),
	contrasenia VARCHAR(50),
	idEmpresa INT,
	FOREIGN KEY (idEmpresa) REFERENCES Empresa(idEmpresa)
)

CREATE TABLE MT(
	idMT INT IDENTITY(1,1) PRIMARY KEY,
	Extra FLOAT
);



--PROCEDIMIENTO ALMACENADO QUE CREE UN REGISTRO CUANDO UN ALUMNO NO PAGO UN MES Y APAREZCA EL MONTOPAGADO EN 0--
CREATE PROCEDURE InsertarPagosFaltantes
AS
BEGIN
    -- Definir la fecha límite para el pago del mes anterior
    DECLARE @fechaLimite DATE
    SET @fechaLimite = DATEADD(month, -1, DATEADD(day, 1, EOMONTH(GETDATE())))

    -- Buscar los alumnos que no han pagado en el mes anterior
    INSERT INTO PagoMensual (fechaPago, idAlumno, idMonto, montoPagado, montoPendiente, idEstadoPago)
    SELECT @fechaLimite, A.idAlumno, 1, 0, 0, 2
    FROM Alumno A
    WHERE NOT EXISTS (
        SELECT 1
        FROM PagoMensual PM
        WHERE PM.idAlumno = A.idAlumno AND PM.fechaPago = @fechaLimite
    )
END



--TRIGER PARA CALCULO DE SI SE PAGA EXTRA
ALTER TRIGGER tr_pago_mensual_Exceso
ON PagoMensual
AFTER INSERT
AS
BEGIN
    DECLARE @idPagoMensual INT
    DECLARE @fecha DATE
    DECLARE @idAlumno INT
    DECLARE @idMonto INT
    DECLARE @montoPagado FLOAT(2)
    DECLARE @monto FLOAT(2)
    DECLARE @montoPendiente FLOAT(2)
    DECLARE @idEstadoPago INT
    DECLARE @extra FLOAT(2)
    DECLARE @X FLOAT(2) 
	DECLARE @fechaSiguiente DATE
    SELECT @idPagoMensual = idPagoMensual, @fecha = fechaPago, @idAlumno = idAlumno, @idMonto = idMonto,
           @montoPagado = montoPagado, @montoPendiente = montoPendiente, @idEstadoPago = idEstadoPago
    FROM inserted
    IF @montoPagado > 0
	BEGIN
	INSERT INTO HistorialPagos(idAlumno, fecha, montoPagado) VALUES(@idAlumno, @fecha, @montoPagado)
	END
    -- Verificar si el montoPagado es mayor que el monto de la tabla Monto
    SELECT @monto = monto FROM Monto WHERE idMonto = @idMonto
    
    IF @montoPagado > @monto
    BEGIN
        -- Calcular la cantidad extra y actualizar el montoPendiente
        SELECT @extra = @montoPagado - @monto
		INSERT INTO MT (Extra) VALUES(CAST(@extra AS VARCHAR(MAX)));
        UPDATE PagoMensual SET montoPendiente = 0, montoPagado = @monto WHERE idPagoMensual = @idPagoMensual
        
        -- Buscar un registro anterior con estadoPago = 2
        DECLARE @idPagoMensualAnterior INT
        SELECT TOP 1 @idPagoMensualAnterior = idPagoMensual
        FROM PagoMensual
        WHERE idAlumno = @idAlumno
        AND idMonto = @idMonto
		AND montoPagado <= @monto
        AND fechaPago < @fecha
        AND idEstadoPago = 2
        ORDER BY fechaPago DESC

		DECLARE @pago FLOAT
        SELECT @pago = montoPagado
        FROM PagoMensual
        WHERE idPagoMensual = @idPagoMensualAnterior
		AND idAlumno = @idAlumno
        AND idMonto = @idMonto
		AND montoPagado <= @monto
        AND fechaPago < @fecha
        AND idEstadoPago = 2

        -- Si se encontró un registro anterior, actualizarlo con el extra
        IF @idPagoMensualAnterior IS NOT NULL
		BEGIN
			DECLARE @A FLOAT
			DECLARE @B FLOAT
			SELECT @A = @pago + @extra
			IF @extra > @monto
			BEGIN
				SET @B =  @monto-@pago
				SET @extra = @extra - @B
			END
			ELSE IF @extra <= @monto
			BEGIN 
				SET @B = @extra - @pago
				SET @extra = @extra - (@monto -@pago)
			END
			WHILE @extra > 0
			BEGIN
				-- Restablecer el valor de @extra a la cantidad que sobrepasa el monto máximo
				SET @extra = @extra
				INSERT INTO MT (Extra) VALUES(CAST(@extra AS VARCHAR(MAX)));
				-- Actualizar el registro anterior con el monto máximo
				UPDATE PagoMensual SET montoPagado = @pago + @B, montoPendiente = 0, idEstadoPago = 1
				WHERE idPagoMensual = @idPagoMensualAnterior
        
				-- Buscar un nuevo registro anterior con estadoPago = 2
				SELECT TOP 1 @idPagoMensualAnterior = idPagoMensual, @pago = montoPagado
				FROM PagoMensual
				WHERE idAlumno = @idAlumno
				AND idMonto = @idMonto
				AND montoPagado <= @monto
				AND fechaPago < @fecha
				AND idEstadoPago = 2
				ORDER BY fechaPago DESC
        
				-- Si se encontró un registro anterior, actualizar @A con el monto anterior más el extra
				IF @idPagoMensualAnterior IS NOT NULL
				BEGIN
					

					SELECT @pago = montoPagado
					FROM PagoMensual
					WHERE idPagoMensual = @idPagoMensualAnterior
					AND idAlumno = @idAlumno
					AND idMonto = @idMonto
					AND montoPagado <= @monto
					AND fechaPago < @fecha
					AND idEstadoPago = 2
            
					SET @A = @pago + @extra
					IF @extra > @monto
					BEGIN
						SET @B =  @monto-@pago
						SET @extra = @extra - @B
					END
					ELSE IF @extra <= @monto
					BEGIN 
						SET @B = @extra - @pago
						SET @extra = @extra - (@monto -@pago)
					END
				END
				-- Si no se encontró un registro anterior, crear uno nuevo con el extra restante
				IF @extra > 0 
				BEGIN
					
					SELECT @fechaSiguiente = DATEADD(month, 1, @fecha)

					IF @extra <= @monto
					BEGIN
						INSERT INTO PagoMensual (fechaPago, idAlumno, idMonto, montoPagado, montoPendiente, idEstadoPago)
						VALUES (@fechaSiguiente, @idAlumno, @idMonto, @extra, 0, 1)
						SET @extra = 0
						INSERT INTO MT (Extra) VALUES(CAST(@extra AS VARCHAR(MAX)));
					END
					IF @extra > @monto
					BEGIN
						INSERT INTO PagoMensual (fechaPago, idAlumno, idMonto, montoPagado, montoPendiente, idEstadoPago)
						VALUES (@fechaSiguiente, @idAlumno, @idMonto, @monto, 0, 1)
						SET @extra = @extra - @monto
						INSERT INTO MT (Extra) VALUES(CAST(@extra AS VARCHAR(MAX)));
					END
					SET @A = @monto
				END
			END
    
			-- Actualizar el registro anterior con el valor final de @A
			UPDATE PagoMensual SET montoPagado = @A, montoPendiente = 0, idEstadoPago = 1
			WHERE idPagoMensual = @idPagoMensualAnterior


		END

        -- Si no se encontró un registro anterior, crear uno nuevo
        ELSE
        BEGIN
			SELECT @fechaSiguiente = DATEADD(month, 1, @fecha)
			WHILE @extra > 0
			BEGIN
				IF @extra <= @monto
				BEGIN
					INSERT INTO PagoMensual (fechaPago, idAlumno, idMonto, montoPagado, montoPendiente, idEstadoPago)
					VALUES (@fechaSiguiente, @idAlumno, @idMonto, @extra, 0, 1)
					SET @extra = 0
					INSERT INTO MT (Extra) VALUES(CAST(@extra AS VARCHAR(MAX)));
				END
				ELSE IF @extra > @monto
				BEGIN 
					INSERT INTO PagoMensual (fechaPago, idAlumno, idMonto, montoPagado, montoPendiente, idEstadoPago)
					VALUES (@fechaSiguiente, @idAlumno, @idMonto, @monto, 0, 1)

					SET @extra = @extra-@monto
					INSERT INTO MT (Extra) VALUES(CAST(@extra AS VARCHAR(MAX)));
				END 
				SET @fechaSiguiente = DATEADD(month, 1, @fechaSiguiente)
			END
		END
    END
END




--TRIGGER QUE PONDRA EN ACTIVO A UN ALUMNO CUANDO SE CREE
CREATE TRIGGER Trigger_InsertEstadoAlumno
ON Alumno
AFTER INSERT
AS
BEGIN
    DECLARE @idAlumno INT
    DECLARE @idEstado INT

    -- Obtener el idAlumno del registro insertado
    SELECT @idAlumno = idAlumno FROM inserted

    -- Obtener el idEstado del primer registro en la tabla Estado
    SELECT TOP 1 @idEstado = idEstado FROM Estado

    -- Insertar el registro en la tabla EstadoAlumno
    INSERT INTO EstadoAlumno (idAlumno, idEstado)
    VALUES (@idAlumno, @idEstado)
END

--TRIGGER PARA CUANDO SE CREE UN ALUMNO SE CREE UN REGISTRO EN LA TABLA INSCRIPCION
CREATE TRIGGER CrearInscripcion
ON Alumno
AFTER INSERT
AS
BEGIN
    -- Inserta el registro en la tabla Inscripcion
    INSERT INTO Inscripcion (idAlumno, fechaInscripcion)
    SELECT idAlumno, GETDATE() FROM inserted;
END;





