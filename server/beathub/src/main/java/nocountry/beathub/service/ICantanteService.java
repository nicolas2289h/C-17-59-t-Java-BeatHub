package nocountry.beathub.service;

import nocountry.beathub.model.Cantante;

import java.util.List;

public interface ICantanteService {
    boolean registerCantante(Cantante cantante);

    boolean loginUser(String username, String password);

    List<Cantante> findAllCantantes();
}

