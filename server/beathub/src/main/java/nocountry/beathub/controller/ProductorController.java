package nocountry.beathub.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import nocountry.beathub.dto.request.UsuarioLoginDTO;
import nocountry.beathub.exception.*;
import nocountry.beathub.model.Artista;
import nocountry.beathub.model.Beat;
import nocountry.beathub.model.Productor;
import nocountry.beathub.service.IArtistaService;
import nocountry.beathub.service.IBeatService;
import nocountry.beathub.service.IProductorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productor")
@Tag(name="Controlador de productor", description = "Controlador de para acceder a las operaciones del productor")
public class ProductorController {

    @Autowired
    private IProductorService productorService;
    @Autowired
    private IBeatService iBeatService;
    @Operation(
            summary = "Registra un productor",
            description = ""
    )
    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@RequestBody @Valid Productor productor) {
        try {
            boolean estadoRegistro = productorService.registerProductor(productor);
            if (estadoRegistro) {
                return ResponseEntity.ok().body("{\"message\": \"Usuario registrado exitosamente.\"}");
            }
        } catch (ProductorExistException e) {
            return ResponseEntity.badRequest().body("{\"error\": \"El nombre de usuario ya fue registrado.\"}");
        } catch (HibernateOperationException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Error interno del servidor al intentar registrar el usuario.\"}");
        }

        // Si el estado de registro es falso (algo inesperado ocurrió)
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Error desconocido al intentar registrar el usuario.\"}");
    }
    @Operation(
            summary = "Autentica un productor",
            description = "Permite autenticar el usuario y los password de un productor"
    )
    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody @Valid UsuarioLoginDTO usuarioLogin) {
        try {
            boolean authenticated = productorService.loginUser(usuarioLogin.getUsername(), usuarioLogin.getPassword());
            if (authenticated) {
                return ResponseEntity.ok().body("{\"message\": \"Usuario autenticado\"}");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Nombre de usuario o contraseña incorrectos\"}");
            }
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Nombre de usuario no encontrado\"}");
        } catch (IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Contraseña incorrecta\"}");
        } catch (HibernateOperationException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Error interno del servidor\"}");
        }
    }

    @Operation(
            summary = "Obtiene todos los productores",
            description = "Obtiene un listado de todos los productores que hay en la base de datos"
    )
    @GetMapping("/productores")
    public ResponseEntity<List<Productor>> findAllProductores() {
        List<Productor> productores = productorService.findAllProductores();
        return new ResponseEntity<>(productores, HttpStatus.OK);
    }

    @Operation(
            summary = "Obtiene un productor por su ID",
            description = "Obtiene un productor especifico almacenado la base de datos"
    )
    @GetMapping("/{id}")
    public ResponseEntity<Object> findProductorById(@PathVariable Long id) {
        try {
            Productor productor = productorService.findProductorById(id);
            return ResponseEntity.ok().body(productor);
        } catch (IdNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Productor no encontrado\"}");
        } catch (HibernateOperationException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Error interno del servidor\"}");
        }
    }



    @PostMapping("/productor/{id}/add-beat")
    public ResponseEntity<Object> addBeatToProductor(@PathVariable Long id, @RequestParam Long idBeat){


            try {
                Productor productor = productorService.findProductorById(id);

                // Obtener el beat por su ID
                Beat beat = iBeatService.findBeatById(idBeat);

                // Agregar el beat a la lista de beats del productor
                productor.getMisBeats().add(beat);

                // Guardar el productor actualizado en la base de datos
                productorService.agregarBeat(productor);

                return ResponseEntity.ok().body("{\"message\": \"Se agrego el beat exitosamente\"}");

            } catch (IdNotFoundException e) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Registro no encontrado\"}");

            } catch (HibernateOperationException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Error interno del servidor\"}");
            }
            // Obtener el beat por su ID


        }





}