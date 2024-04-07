package nocountry.beathub.repository;

import nocountry.beathub.model.Cantante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ICantanteRepository extends JpaRepository<Cantante, Long> {
    Optional<Cantante> findByUsername(String username);
    boolean existsByUsername(String username);
}