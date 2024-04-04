package nocountry.beathub.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/productor")
@Tag(name="Controlador de productor", description = "Controlador de para acceder a las operaciones del productor")
public class ProductorController {
}
