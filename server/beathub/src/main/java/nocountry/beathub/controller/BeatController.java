package nocountry.beathub.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import nocountry.beathub.exception.*;
import nocountry.beathub.model.Beat;
import nocountry.beathub.model.Productor;
import nocountry.beathub.service.IBeatService;
import nocountry.beathub.service.IProductorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/beat")
@Tag(name="Controlador de Beat", description = "Controlador para acceder a las operaciones del Beat")
public class BeatController {

    private final IBeatService iBeatService;

    @Autowired
    private IProductorService productorService;
    @Operation(
        summary = "Obtiene todos los beats registrados en el sistema."
    )
    @GetMapping("/beats")
    public ResponseEntity<List<Beat>> getAllBeats() {
        return ResponseEntity.ok(iBeatService.getAllBeats());
    }


    @Operation(
            summary = "Obtiene todos los beats registrados en el sistema."
    )
    @GetMapping("/beats/{id}")
    public ResponseEntity<List<Beat>> getAllBeatsByIdProductor(@PathVariable Long id) {
        return ResponseEntity.ok(iBeatService.getAllBeatsByIdProductor(id));
    }



    @Operation(
            summary = "Guarda un beat en el sistema."
    )
    @PostMapping("/save-beat")
    public ResponseEntity<Beat> saveBeat(@RequestBody Beat newBeat, UriComponentsBuilder uriComponentsBuilder){
        
        try {
            Beat savedBeat = iBeatService.saveBeat(newBeat);

            Productor prod = productorService.findProductorById(savedBeat.getProductor().getId());

            savedBeat.getProductor().setName(prod.getName());

            savedBeat.getProductor().setLastname(prod.getLastname());


            URI url = uriComponentsBuilder.path("/api/beat/{id}").buildAndExpand(savedBeat.getIdBeat()).toUri();
            return ResponseEntity.created(url).body(savedBeat);
        } catch (DataIntegrityViolationException e) {
            if (e.getMessage().contains("Duplicate entry")) {
                throw new LicenciaDuplicadaException("No se puede duplicar la licencia.");
            } else if(e.getMessage().contains("foreign key constraint fails")){
                throw new LicenciaNoExisteException("Licencia no existe");
            }else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
        } catch (HibernateOperationException e) {
            throw new RuntimeException(e);
        } catch (IdNotFoundException e) {
            throw new RuntimeException(e);
        }
    }



    @Operation(
            summary = "Obtiene un beat por su id",
            description = "Obtiene un productor especifico almacenado la base de datos"
    )
    @GetMapping("/{id}")
    public ResponseEntity<Object> findBeatById(@PathVariable Long id) {
        try {
            Beat beat = iBeatService.findBeatById(id);
            return ResponseEntity.ok().body(beat);
        } catch (IdNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Beat no encontrado\"}");
        } catch (HibernateOperationException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Error interno del servidor\"}");
        }
    }

}
