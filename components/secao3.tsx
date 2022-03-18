import Image from "next/image";
import ReactPlayer from "react-player";
import styles from "../styles/secao3.module.scss"

export const Secao3 = () => {
  return (
    <div className={styles.secao3}>
      <h4>Mas Marcela, eu...</h4>
      <div className={styles.container_principal}>
        <div style={{ display: "flex" }}>
          <div className={styles.container} style={{ maxWidth: "500px" }}>
            <div>
              <Image
                height="86"
                width="86"
                alt="icone-tempo"
                src="/icone-tempo.png"
              />
            </div>
            <h6>Não tenho tempo para participar do curso</h6>
            <p>
              O curso acontecerá ao vivo, pelo Zoom, em 4 encontros de duas
              horas, com horários e datas já definidos, mas você poderá assistir
              gravado caso não consiga acompanhar algum dia ao vivo. Entretanto,
              convenhamos:{" "}
              <span style={{ fontWeight: "bold" }}>
                duas horas em troca de autoconhecimento e liderança
              </span>{" "}
              bem desenvolvidos,{" "}
              <span style={{ fontWeight: "bold" }}>valem muito</span> mais a
              pena que duas horas no Netflix procrastinando.
            </p>
          </div>
          <div className={styles.container} style={{ maxWidth: "500px" }}>
            <div>
              <Image
                height="86"
                width="86"
                alt="icone-dinheiro"
                src="/icone-dinheiro.png"
              />
            </div>
            <h6>Não tenho dinheiro para entrar nessa turma</h6>
            <p>
              Eu e minha equipe pensamos no preço do curso para você poder
              participar, independentemente do seu orçamento. A vista o curso
              sai por R$549.00, e você pode parcelar em até 4x de R$145,90, uma
              verdadeira oferta imperdível, para{" "}
              <span style={{ fontWeight: "bold" }}>priorizar</span> já a sua
              liderança!
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className={styles.container}
            style={{ maxWidth: "1000px", height: "185px" }}
          >
            <div>
              <Image
                height="86"
                width="86"
                alt="icone-cabeca"
                src="/icone-cabeca.png"
              />
            </div>
            <h6>Não tenho jeito para me desenvolver</h6>
            <p>
              O desenvolver-se é um processo, e como todo processo, pode e deve
              ser aperfeiçoado. Ninguém nasce 100% desenvolvido, é nossa missão
              progredir, mas para isso temos que ir em busca do conhecimento.
              Foi pensando em você, que quer evoluir que eu criei esse curso.
              Vamos abordar os fundamentos, para você{" "}
              <span style={{ fontWeight: "bold" }}>
                aprender a se observar e se desenvolver efetivamente!
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <h4>O que eles dizem</h4>
      <div
        className={styles.container}
        style={{ height: "fit-content", gap: "12px" }}
      >
        <sub>Ouça o que os meus alunos têm a dizer sobre o curso:</sub>
        <ReactPlayer
          style={{ width: "980px", height: "454px" }}
          url="https://youtu.be/y-5DhZhb4P4"
        />
      </div>
    </div>
  );
};
