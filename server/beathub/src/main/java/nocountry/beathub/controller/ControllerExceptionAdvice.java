package nocountry.beathub.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import nocountry.beathub.exception.ErrorDetails;
import nocountry.beathub.exception.IdNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Tag(name="Controlador de excepciones", description = "Controlador de excepciones, permite manejar y controlar  excepciones")
@RestControllerAdvice
public class ControllerExceptionAdvice {


    @Operation(
            summary = "Devuelve excepciones de datos no encontrados",
            description = "Captura y devuelve codigo de estado 404 no encontrado, con excepciones de datos no encontrados"
    )
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    @ExceptionHandler({IdNotFoundException.class})
    public ResponseEntity<ErrorDetails> notFoundExceptions(Exception ex) {

        ErrorDetails errorDetails = new ErrorDetails();
        errorDetails.setStatus(HttpStatus.NOT_FOUND.value() + " NOT_FOUND");
        errorDetails.setMessage(ex.getMessage());

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorDetails);
    }
}
