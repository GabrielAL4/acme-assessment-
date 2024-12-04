import React, { useState } from "react";
import logo from "./assets/acme.png";

function App() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleAcceptTerms = () => setAcceptedTerms(true);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Respostas enviadas:", answers); // Você pode usar isso para enviar os dados a um backend
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ background: "#f4f4f4", padding: "10px 0" }}>
        <img
          src={logo}
          alt="Logo da Empresa"
          style={{ maxWidth: "150px", height: "auto" }}
        />
      </header>

      {/* Linhas vermelhas */}
      <div style={{ borderBottom: "5px solid red" }}></div>

      {/* Conteúdo */}
      <main style={{ padding: "20px" }}>
        {!acceptedTerms ? (
          <div>
            <p>
              Para continuar e responder às perguntas, você deve aceitar os termos de uso:
            </p>
            <div style={{ textAlign: "left", margin: "20px 0" }}>
              <p><strong>Termos de Uso</strong></p>

              <p><strong>Bem-vindo à nossa plataforma de avaliação!</strong></p>
              <p>
                Ao utilizar este formulário, você concorda com os seguintes termos e condições:
              </p>

              <h3>1. Objetivo do Formulário</h3>
              <p>
                O objetivo deste formulário é coletar respostas a perguntas relacionadas a conceitos de governança de TI e segurança da informação. As respostas serão usadas para avaliar o entendimento dos usuários sobre os tópicos mencionados.
              </p>

              <h3>2. Privacidade e Confidencialidade</h3>
              <p>
                As respostas fornecidas no formulário são coletadas de forma confidencial e serão usadas exclusivamente para fins de avaliação interna. Não compartilharemos suas respostas com terceiros sem o seu consentimento expresso, exceto conforme exigido por lei.
              </p>

              <h3>3. Responsabilidade do Usuário</h3>
              <p>
                Ao preencher o formulário, você garante que as informações fornecidas são precisas e verdadeiras. Você é responsável por fornecer respostas honestas e pela conformidade com as regras estabelecidas.
              </p>

              <h3>4. Propriedade Intelectual</h3>
              <p>
                Todo o conteúdo deste formulário, incluindo textos, gráficos, e logotipos, é protegido por direitos autorais e outras leis de propriedade intelectual. A reprodução, distribuição ou uso não autorizado de qualquer material é proibido sem a permissão prévia da empresa.
              </p>

              <h3>5. Uso do Formulário</h3>
              <p>
                Você concorda em utilizar o formulário apenas para fins legais e em conformidade com todas as leis e regulamentos aplicáveis. O uso indevido ou fraudulento do formulário pode resultar em restrições de acesso ou outras ações legais.
              </p>

              <h3>6. Alterações nos Termos de Uso</h3>
              <p>
                A empresa se reserva o direito de alterar os termos e condições deste formulário a qualquer momento. Quaisquer alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação.
              </p>

              <h3>7. Aceitação dos Termos</h3>
              <p>
                Ao aceitar os termos, você concorda em cumprir todas as condições estabelecidas neste Termo de Uso. Se você não concorda com algum dos termos, não deverá preencher o formulário.
              </p>

              <h3>8. Limitação de Responsabilidade</h3>
              <p>
                A empresa não se responsabiliza por qualquer dano, perda ou prejuízo resultante do uso deste formulário, exceto em casos de negligência grave ou dolo.
              </p>

              <h3>9. Lei Aplicável</h3>
              <p>
                Este Termo de Uso é regido pelas leis do [seu país/estado] e qualquer disputa relacionada será resolvida nos tribunais competentes.
              </p>

              <p>
                Se você aceitar estes termos, clique no botão "Aceitar Termos" para continuar e responder às questões do formulário.
              </p>
            </div>

            <button
              onClick={handleAcceptTerms}
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Aceitar Termos
            </button>
          </div>
        ) : (
          !submitted && (
            <form onSubmit={handleSubmit}>
              {/* Pergunta 1 */}
              <div>
                <p>1. O que é COBIT e como ele pode beneficiar a empresa?</p>
                <label>
                  <input
                    type="radio"
                    name="question1"
                    value="a"
                    checked={answers.question1 === "a"}
                    onChange={handleAnswerChange}
                  />
                  Um software de segurança.
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="question1"
                    value="b"
                    checked={answers.question1 === "b"}
                    onChange={handleAnswerChange}
                  />
                  Uma estrutura de governança de TI para alinhar TI com os objetivos do negócio.
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="question1"
                    value="c"
                    checked={answers.question1 === "c"}
                    onChange={handleAnswerChange}
                  />
                  Uma ferramenta para backup de dados.
                </label>
              </div>

              {/* Pergunta 2 */}
              <div>
                <p>2. O que fazer ao identificar um incidente de segurança?</p>
                <label>
                  <input
                    type="radio"
                    name="question2"
                    value="a"
                    checked={answers.question2 === "a"}
                    onChange={handleAnswerChange}
                  />
                  Tentar resolver sozinho.
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="question2"
                    value="b"
                    checked={answers.question2 === "b"}
                    onChange={handleAnswerChange}
                  />
                  Informar imediatamente ao setor de TI e seguir os procedimentos estabelecidos.
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="question2"
                    value="c"
                    checked={answers.question2 === "c"}
                    onChange={handleAnswerChange}
                  />
                  Ignorar e continuar trabalhando.
                </label>
              </div>

              {/* Pergunta 3 */}
              <div>
                <p>3. Qual a importância de backups automáticos?</p>
                <label>
                  <input
                    type="radio"
                    name="question3"
                    value="a"
                    checked={answers.question3 === "a"}
                    onChange={handleAnswerChange}
                  />
                  Garantir a recuperação de dados em caso de falhas ou ataques.
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="question3"
                    value="b"
                    checked={answers.question3 === "b"}
                    onChange={handleAnswerChange}
                  />
                  Economizar espaço no servidor.
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="question3"
                    value="c"
                    checked={answers.question3 === "c"}
                    onChange={handleAnswerChange}
                  />
                  Evitar que a equipe de TI tenha muito trabalho.
                </label>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "20px",
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Enviar Respostas
              </button>
            </form>
          )
        )}

        {/* Mensagem após envio */}
        {submitted && (
          <p>
            Obrigado por responder! Suas respostas foram registradas.
          </p>
        )}
      </main>

      {/* Linhas vermelhas */}
      <div style={{ borderBottom: "5px solid red" }}></div>

      {/* Footer */}
      <footer style={{ background: "#f4f4f4", padding: "10px 0" }}>
        <p>&copy; 2024 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
