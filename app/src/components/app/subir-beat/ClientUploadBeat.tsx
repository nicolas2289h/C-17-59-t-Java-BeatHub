import styles from "./ClientUploadBeat.module.css";

const ClientUploadBeat = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroElementsContainer}>
          <h1 className={styles.heroTitle}>Tu beat</h1>
          <p className={styles.heroParagraph}>Tu próximo hit empieza acá.</p>
        </div>
      </section>
      <section className={styles.generalContainer}>
        <div>
          <div className={styles.gridBeatEdit}>
            <figure className={styles.icon}></figure>
            <div className={styles.mainSectionContainer}>
              <h3 className={styles.subtitle}>Editor del beat</h3>
              <p className={styles.paragraph}>
                Aquí puedes editar la información del beat: nombre y link del
                beat . También puedes seleccionar los géneros, BPM y estados.
              </p>
            </div>
          </div>
          <hr className={styles.hr} />
          <form action="">
            <div className={styles.mainSectionContainer}>
              <h3 className={styles.subtitle}>
                Nombre del beat{" "}
                <span className={styles.span}>
                  (Nombre con el que quieres que se reconozca el beat)
                </span>
              </h3>
              <input
                type="text"
                name=""
                id=""
                className={styles.input}
                placeholder="Nombre beat"
                required
              />
              <p className={styles.paragraph}>
                Selecciona las características que ayudaran al usuario a
                encontrar y saber más sobre tu beat.
              </p>
              <div className={styles.beatInputsContainer}>
                <div className={styles.container}>
                  <h4 className={styles.h4}>Género</h4>
                  <select name="Generos" id="">
                    <option value="acustico">Acústico</option>
                    <option value="afro">Afro</option>
                    <option value="afrobeat">Afrobeat</option>
                    <option value="alternativo">Alternativo</option>
                    <option value="ambiental">Ambiental</option>
                    <option value="bachata">Bachata</option>
                    <option value="blues">Blues</option>
                    <option value="boom-bap">Boom Bap</option>
                    <option value="rap">Rap</option>
                    <option value="club-baile">Club/Baile</option>
                    <option value="country">Country</option>
                    <option value="cumbia">Cumbia</option>
                    <option value="dancehall">Dancehall</option>
                    <option value="death-metal">Death Metal</option>
                    <option value="disco">Disco</option>
                    <option value="drill">Drill</option>
                    <option value="dubstep">Dubstep</option>
                    <option value="east-coast">East-coast</option>
                    <option value="electronica">Electrónica</option>
                    <option value="emo">Emo</option>
                    <option value="experimental">Experimental</option>
                    <option value="folk">Folk</option>
                    <option value="funk">Funk</option>
                    <option value="gospel">Gospel</option>
                    <option value="grime">Grime</option>
                    <option value="grunge">Grunge</option>
                    <option value="hard">Hard</option>
                    <option value="hardcore">Hardcore</option>
                    <option value="heavy-metal">Heavy Metal</option>
                    <option value="hip-hop">Hip Hop</option>
                    <option value="house">House</option>
                    <option value="hyperpop">Hyperpop</option>
                    <option value="indie">Indie</option>
                    <option value="jazz">Jazz</option>
                    <option value="jersey-club">Jersey Club</option>
                    <option value="k-pop">K-pop</option>
                    <option value="lo-fi">Lo-Fi</option>
                    <option value="melodico">Melódico</option>
                    <option value="orquestal">Orquestal</option>
                    <option value="phonk">Phonk</option>
                    <option value="pop">Pop</option>
                    <option value="punk">Punk</option>
                    <option value="r&b">R&B</option>
                    <option value="reggae">Reggae</option>
                    <option value="rock">Rock</option>
                    <option value="salsa">Salsa</option>
                    <option value="shoegaze">Shoegaze</option>
                    <option value="soul">Soul</option>
                    <option value="synthwave">Synthwave</option>
                    <option value="techno">Techno</option>
                    <option value="trance">Trance</option>
                    <option value="trap">Trap</option>
                    <option value="trill">Trill</option>
                    <option value="uk">UK</option>
                    <option value="west-coast">West-coast</option>
                  </select>
                </div>
                <div className={styles.container}>
                  <h4 className={styles.h4}>Estado de Humor</h4>
                  <select name="humor" id="">
                    <option value="activar">Activar</option>
                    <option value="agresivo">Agresivo</option>
                    <option value="concentracion">Concentración</option>
                    <option value="conmovedor">Conmovedor</option>
                    <option value="emocional">Emocionado</option>
                    <option value="energetico">Energético</option>
                    <option value="enojado">Enojado</option>
                    <option value="feliz">Feliz</option>
                    <option value="inspirar">Inspirar</option>
                    <option value="melancolico">Melancólico</option>
                    <option value="melodico">Melódico</option>
                    <option value="oscuro">Oscuro</option>
                    <option value="relajado">Relajado</option>
                    <option value="romantico">Romántico</option>
                    <option value="soniar">Soñar</option>
                    <option value="solitario">Solitario</option>
                    <option value="triste">Triste</option>
                  </select>
                </div>
                <div className={styles.container}>
                  <h4 className={styles.h4}>Tonalidad</h4>
                  <select name="tonalidad" id="">
                    <option value="a">A</option>
                    <option value="am">Am</option>
                    <option value="a#">A#</option>
                    <option value="a#m">A#m</option>
                    <option value="b">B</option>
                    <option value="bm">Bm</option>
                    <option value="c">C</option>
                    <option value="cm">Cm</option>
                    <option value="c#">C#</option>
                    <option value="c#m">C#m</option>
                    <option value="d">D</option>
                    <option value="dm">Dm</option>
                    <option value="d#">D#</option>
                    <option value="d#m">D#m</option>
                    <option value="e">E</option>
                    <option value="em">Em</option>
                    <option value="f">F</option>
                    <option value="fm">Fm</option>
                    <option value="f#">F#</option>
                    <option value="f#m">F#m</option>
                    <option value="g">G</option>
                    <option value="gm">Gm</option>
                    <option value="g#">G#</option>
                    <option value="g#m">G#m</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.gridBeatEdit}>
              <figure>
                <img src="./../../../assets/assets/icons/icons-precio.png" alt="i-price" className={styles.icon}/>
              </figure>
              <div className={styles.mainSectionContainer}>
                <h3 className={styles.subtitle}>Seleccionar precio</h3>
                <p className={styles.paragraph}>
                Aquí puedes especificar el precio deseado por tu beat.
                </p>
              </div>
            </div>
            <hr className={styles.hr} />
            
          </form>
        </div>
      </section>
    </>
  );
};

export default ClientUploadBeat;
