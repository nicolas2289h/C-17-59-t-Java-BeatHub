package nocountry.beathub.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Beat {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long IdBeat;
    private String nombre;
    private String url;
    @Column(name = "tiempo_bmp")
    private Integer tiempoBmp;
    private String tonalidad;
    private String genero;
    private String mood;
    private Boolean featured;
    private Double precio;

    @OneToOne
    @JoinColumn (name = "lic_beat_id", referencedColumnName = "IdLic",nullable = true)
    private Licencia miLicencia;


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<EstructuraBeat> estructurasBeat;

}
