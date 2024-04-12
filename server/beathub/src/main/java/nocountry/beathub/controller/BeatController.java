package nocountry.beathub.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import nocountry.beathub.exception.LicenciaDuplicadaException;
import nocountry.beathub.exception.LicenciaNoExisteException;
import nocountry.beathub.model.Beat;
import nocountry.beathub.service.IBeatService;
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
    @Operation(
        summary = "Obtiene todos los beats registrados en el sistema."
    )
    @GetMapping("/beats")
    public ResponseEntity<List<Beat>> getAllBeats() {
        return ResponseEntity.ok(iBeatService.getAllBeats());
    }
    @Operation(
            summary = "Guarda un beat en el sistema."
    )
    @PostMapping("/save-beat")
    public ResponseEntity<Beat> saveBeat(@RequestBody Beat newBeat, UriComponentsBuilder uriComponentsBuilder){
        
        try {
            Beat savedBeat = iBeatService.saveBeat(newBeat);
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
        }
    }

    @Operation(
        summary = "Obtiene un beat por su id"
    )
    @GetMapping("/{id}")
    public ResponseEntity<Beat> getBeatById(@PathVariable Long id){
        return ResponseEntity.of(iBeatService.getBeat(id));
    }
}
