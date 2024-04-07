package nocountry.beathub.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import nocountry.beathub.dto.request.UsuarioLoginDTO;
import nocountry.beathub.exception.CantanteExistException;
import nocountry.beathub.exception.HibernateOperationException;
import nocountry.beathub.exception.IncorrectPasswordException;
import nocountry.beathub.exception.UsernameNotFoundException;
import nocountry.beathub.model.Cantante;
import nocountry.beathub.model.UsuarioLogin;
import nocountry.beathub.service.CantanteService;
import nocountry.beathub.service.ICantanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cantante")
public class CantanteController {


    @Autowired
    private ICantanteService cantanteService;

    @Operation(
            summary = "Registra un cantante",
            description = ""
    )
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody @Valid Cantante cantante) {
        try {
            boolean estadoRegistro = cantanteService.registerCantante(cantante);
            if (estadoRegistro) {
                return new ResponseEntity<>("Usuario registrado exitosamente.", HttpStatus.CREATED);
            }
        } catch (CantanteExistException e) {
            return new ResponseEntity<>("El nombre de usuario ya fue registrado.", HttpStatus.BAD_REQUEST);
        } catch (HibernateOperationException e) {
            return new ResponseEntity<>("Error interno del servidor al intentar registrar el usuario.", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        // Si el estado de registro es falso (algo inesperado ocurrió)
        return new ResponseEntity<>("Error desconocido al intentar registrar el usuario.", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Operation(
            summary = "Autentica un cantante",
            description = ""
    )
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody @Valid UsuarioLoginDTO usuarioLogin)  {
        try {
            boolean authenticated = cantanteService.loginUser(usuarioLogin.getUsername(), usuarioLogin.getPassword());
            if (authenticated) {
                return ResponseEntity.status(HttpStatus.OK).body("Usuario autenticado");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Nombre de usuario o contraseña incorrectos");
            }
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nombre de usuario no encontrado");
        } catch (IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta");
        } catch (HibernateOperationException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");
        }


    }

    @Operation(
            summary = "Obtiene todos los cantantes",
            description = ""
    )
    @GetMapping("/cantantes")
    public ResponseEntity<List<Cantante>> findAllUsers() {
        List<Cantante> cantantes = cantanteService.findAllCantantes();
        return new ResponseEntity<>(cantantes, HttpStatus.OK);
    }


//    @Operation(
//            summary = "Trae un cantante",
//            description = "Busca un cantante por id"
//    )
//    @GetMapping("/{userId}")
//    public String getUser(@PathVariable Long cantanteId){
//        return "Prueba";
//    }
}
