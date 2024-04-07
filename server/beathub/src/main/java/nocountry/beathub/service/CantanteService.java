package nocountry.beathub.service;

import nocountry.beathub.exception.CantanteExistException;
import nocountry.beathub.exception.HibernateOperationException;
import nocountry.beathub.exception.IncorrectPasswordException;
import nocountry.beathub.exception.UsernameNotFoundException;
import nocountry.beathub.model.Cantante;
import nocountry.beathub.repository.ICantanteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CantanteService implements ICantanteService{
    private final ICantanteRepository cantanteRepository;

    public CantanteService(ICantanteRepository cantanteRepository) {
        this.cantanteRepository = cantanteRepository;
    }

    public boolean registerCantante(Cantante cantante)throws CantanteExistException,HibernateOperationException{
        if (cantanteRepository.existsByUsername(cantante.getName())) {
            throw new CantanteExistException("Ya se encuentra el cliente : " + cantante.getName());
        }

        try {
            cantanteRepository.save(cantante);
        } catch (Exception e) {
            throw new HibernateOperationException("Error interto: " + e.getMessage());
        }


        return true;
    }

    public boolean loginUser(String username, String password) throws UsernameNotFoundException, IncorrectPasswordException ,HibernateOperationException{
        Optional<Cantante> userOptional;
        try {
           userOptional = cantanteRepository.findByUsername(username);
        } catch (Exception e) {
            throw new HibernateOperationException("Error con hibertane: " + e.getMessage());
        }

        if (userOptional.isPresent()) {
            Cantante user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return true;
            } else {
                throw new IncorrectPasswordException("Contraseña incorrecta para el usuario: " + username);
            }
        } else {
            throw new UsernameNotFoundException("Usuario no encontrado: " + username);
        }
    }

    public List<Cantante> findAllCantantes() {
        List<Cantante> cantantes = cantanteRepository.findAll();
        return cantantes;
    }
}
