package nocountry.beathub.service;

import lombok.RequiredArgsConstructor;
import nocountry.beathub.model.Beat;
import nocountry.beathub.repository.IBeatRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@RequiredArgsConstructor
@Service
public class BeatService implements IBeatService{

    private final IBeatRepository iBeatRepository;
    
    @Override
    public List<Beat> getAllBeats() {
        return iBeatRepository.findAll();
    }

    @Override
    public Beat saveBeat(Beat newBeat) {
        return iBeatRepository.save(newBeat);
    }

    @Override
    public Optional<Beat> getBeat(Long id) {
        return iBeatRepository.findById(id);
    }
    
}
