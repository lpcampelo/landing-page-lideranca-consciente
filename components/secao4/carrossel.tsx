import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "../../styles/secao4.module.scss";

export function Carrossel() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className={styles.container}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            {" "}
            <div className={styles.box_s}>
              <Image
                width="86"
                height="86"
                alt="mentoria"
                src="/icone-presente.png"
              />
              <h6>
                Uma mentoria em grupo,
                <span style={{ fontWeight: "bold" }}> exclusiva </span> para
                aqueles que comprarem nas primeiras
                <span style={{ fontWeight: "bold" }}> 24 horas </span>
              </h6>
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.box_s}>
              <Image
                width="86"
                height="86"
                alt="apostila"
                src="/icone-presente.png"
              />
              <h6>
                Uma <span style={{ fontWeight: "bold" }}> apostila </span>
                complementar ao curso
              </h6>
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.box_s}>
              <Image
                width="86"
                height="86"
                alt="certificado"
                src="/icone-presente.png"
              />
              <h6>
                Ao encerrar o curso, te entregarei um
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  certificado de conclusão
                </span>
              </h6>
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.box_s}>
              <Image
                width="86"
                height="86"
                alt="grupo-WhatsApp"
                src="/icone-presente.png"
              />
              <h6>
                Um
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  grupo de WhatsApp{" "}
                </span>
                para eu acompanhar de perto os alunos durante o curso
              </h6>
            </div>
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <div className={styles.box_s}>
              <Image
                width="86"
                height="86"
                alt="aulas-especiais"
                src="/icone-presente.png"
              />
              <h6>
                <span style={{ fontWeight: "bold" }}>Quatro aulas </span>
                especiais, sobre: a liderança do novo mundo, eneagrama,
                comunicação assertiva e inteligência emocional
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}