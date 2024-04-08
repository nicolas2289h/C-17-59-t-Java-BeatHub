package nocountry.beathub.service;

import nocountry.beathub.exception.CantanteExistException;
import nocountry.beathub.exception.HibernateOperationException;
import nocountry.beathub.exception.IncorrectPasswordException;
import nocountry.beathub.exception.UsernameNotFoundException;
import nocountry.beathub.model.Cantante;

import java.util.List;

public interface ICantanteService {
    boolean registerCantante(Cantante cantante)throws CantanteExistException,HibernateOperationException;

    boolean loginUser(String username, String password)throws UsernameNotFoundException, IncorrectPasswordException, HibernateOperationException;

    List<Cantante> findAllCantantes();
}

