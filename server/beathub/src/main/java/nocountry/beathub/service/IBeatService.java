package nocountry.beathub.service;

import nocountry.beathub.model.Beat;

import java.util.List;
import java.util.Optional;

public interface IBeatService {
    List<Beat> getAllBeats();

    Beat saveBeat(Beat newBeat);
    
    Optional<Beat> getBeat(Long id);
} 