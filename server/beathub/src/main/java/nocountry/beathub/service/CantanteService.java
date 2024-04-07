package nocountry.beathub.service;

import nocountry.beathub.model.Cantante;
import nocountry.beathub.repository.ICantanteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CantanteService {
    private final ICantanteRepository cantanteRepository;

    public CantanteService(ICantanteRepository cantanteRepository) {
        this.cantanteRepository = cantanteRepository;
    }

    public boolean registerCantante(Cantante cantante) {
        if (cantanteRepository.existsByUsername(cantante.getName())) {
            return false;
        }

        cantanteRepository.save(cantante);
        return true;
    }

    public boolean loginUser(String username, String password) {
        Optional<Cantante> userOptional = cantanteRepository.findByUsername(username);
        return userOptional.isPresent() && userOptional.get().getPassword().equals(password);
    }

    public List<Cantante> findAllCantantes() {
        List<Cantante> cantantes = cantanteRepository.findAll();
        return cantantes;
    }
}
