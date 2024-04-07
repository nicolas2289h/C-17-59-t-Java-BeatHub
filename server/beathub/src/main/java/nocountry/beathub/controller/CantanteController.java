package nocountry.beathub.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import nocountry.beathub.model.Cantante;
import nocountry.beathub.model.UsuarioLogin;
import nocountry.beathub.service.CantanteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cantante")
public class CantanteController {
    private final CantanteService cantanteService;

    public CantanteController(CantanteService userService) {
        this.cantanteService = userService;
    }

    @Operation(
            summary = "Registra un cantante",
            description = ""
    )
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody @Valid Cantante cantante) {
        boolean estadoRegistro = cantanteService.registerCantante(cantante);
        if (estadoRegistro) {
            return new ResponseEntity<>("Usuario registrado exitosamente.", HttpStatus.CREATED);
        }
        return new ResponseEntity<>("El nombre de usuario ya fue registrado.", HttpStatus.BAD_REQUEST);
    }

    @Operation(
            summary = "Autentica un cantante",
            description = ""
    )
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody @Valid UsuarioLogin usuarioLogin) {
        boolean authenticated = cantanteService.loginUser(usuarioLogin.getUsername(), usuarioLogin.getPassword());
        if (authenticated) {
            return ResponseEntity.status(HttpStatus.OK).body("Usuario autenticado");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Nombre de usuario o contraseña incorrectos");
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
