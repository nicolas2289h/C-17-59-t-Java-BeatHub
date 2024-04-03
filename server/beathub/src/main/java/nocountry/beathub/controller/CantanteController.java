package nocountry.beathub.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cantante")
public class CantanteController {


    @Operation(
            summary = "Trae un cantante",
            description = "Busca un cantante por id"
    )
    @GetMapping("/{userId}")
    public String getUser(@PathVariable Long cantanteId){
        return "Prueba";
    }

}
