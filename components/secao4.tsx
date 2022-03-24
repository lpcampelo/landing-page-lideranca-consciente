import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/secao4.module.scss";

export const Secao4 = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={styles.secao4}>
      <h4>A melhor hora para se desenvolver? Agora!</h4>
      <div className={styles.container}>
        <div className={styles.container_texto}>
          <p>
            A verdade é que a sua realização depende — apenas! — de você.
            Entretanto, isso não implica que a jornada tem que ser solitária. Eu
            estou aqui para te ajudar, mostrando que o autoconhecimento e o
            desenvolvimento da liderança é para todos, independente de qualquer
            coisa.
          </p>
          <p>
            Para facilitar ainda mais sua caminhada, vou disponibilizar bônus
            únicos! De modo que a sua jornada seja cada vez mais completa e
            dinâmica!
          </p>
          <p>Além das aulas ao vivo, vou disponibilizar:</p>
        </div>
      </div>
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
      <div className={styles.container_boxes}>
        <div className={styles.box_s}>
          <Image
            width="86"
            height="86"
            alt="mentoria"
            src="/icone-presente.png"
          />
          <h6>
            Uma mentoria em grupo,
            <span style={{ fontWeight: "bold" }}> exclusiva </span> para aqueles
            que comprarem nas primeiras
            <span style={{ fontWeight: "bold" }}> 24 horas </span>
          </h6>
        </div>
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
      <div className={styles.container_inferior}>
        <div className={styles.container_boxes}>
          <div className={styles.box_m}>
            <Image
              width="86"
              height="86"
              alt="grupo-WhatsApp"
              src="/icone-presente.png"
            />
            <h6>
              Um
              <span style={{ fontWeight: "bold" }}> grupo de WhatsApp </span>
              para eu acompanhar de perto os alunos durante o curso
            </h6>
          </div>
          <div className={styles.box_m}>
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
        <div className={styles.container}>
          <h4 style={{ maxWidth: "980px", margin: "32px 0px 0px", fontSize: "28px" }}>
            No curso, vamos aprofundar o conhecimento nos quatro pilares da
            liderança consciente e do desenvolvimento pessoal:
          </h4>
        </div>
        <div className={styles.container_aulas} style={{ marginTop: "14px" }}>
          <div className={styles.box_l}>
            <Image
              width="86"
              height="86"
              alt="questionar"
              src="/icone-ideia.png"
            />
            <h6>Aula 1 - Questionar</h6>
            <p>
              Refletiremos e trocaremos alguns dos nossos paradigmas e crenças
              limitantes
            </p>
            <p style={{ fontWeight: "600", letterSpacing: "0.0015em" }}>
              31/03 de 19:30h às 21:30h
            </p>
          </div>
          <div className={styles.box_l}>
            <div style={{ marginTop: "17px" }}>
              <Image
                width="86"
                height="86"
                alt="autoconhecimento"
                src="/icone-yoga.png"
              />
            </div>
            <h6>Aula 2 - Autoconhecimento</h6>
            <p>
              Passaremos por um processo de autoconhecimento, por meio do Eneagrama, tirando o melhor
              de você para influenciar positivamente na sua liderança
            </p>
            <p style={{ fontWeight: "600", letterSpacing: "0.0015em" }}>
              07/04 de 19:30h às 21:30h
            </p>
          </div>
        </div>
        <div className={styles.container_aulas}>
          <div className={styles.box_l}>
            <Image
              width="86"
              height="86"
              alt="desenvolvimento-pessoal"
              src="/icone-trofeu.png"
            />
            <h6>Aula 3 - Desenvolvimento Pessoal</h6>
            <p>
              Te mostrarei como ter sucesso com bem-estar e alcançar a
              produtividade saudável
            </p>
            <p style={{ fontWeight: "600", letterSpacing: "0.0015em" }}>
              14/04 de 19:30h às 21:30h
            </p>
          </div>
          <div className={styles.box_l}>
            <Image
              width="86"
              height="86"
              alt="lideranca"
              src="/icone-parceria.png"
            />
            <h6>Aula 4 - Liderança</h6>
            <p>
              Iremos juntos desenvolver a inteligência emocional, para saber
              lidar melhor com você e com o outro
            </p>
            <p style={{ fontWeight: "600", letterSpacing: "0.0015em" }}>
              21/04 de 19:30h às 21:30h
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <h6 className={styles.chamada}>
            Aproveite a chance e entre agora nessa turma exclusiva:
          </h6>
        </div>
        <div className={styles.container}>
          <a
            href="https://go.hotmart.com/L51935249M"
            rel="noreferrer"
            target="_self"
          >
            <button>Quero garantir minha vaga!</button>
          </a>
        </div>
      </div>
    </div>
  );
};
