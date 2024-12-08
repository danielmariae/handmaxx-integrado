package br.org.handmaxx.dto.atleta.questionariosocial;

import br.org.handmaxx.model.CondicoesMoradia;
import br.org.handmaxx.model.QuestionarioSocial;

public record QuestionarioSocialResponseDTO(
    Double rendaFamiliar,
    Integer pessoasEmCasa,
    CondicoesMoradia condicoesMoradia,
    Boolean cadastroNIS
) {
    public static QuestionarioSocialResponseDTO valueOf(QuestionarioSocial questionario){
        return new QuestionarioSocialResponseDTO(
            questionario.getRendaFamiliar(),
            questionario.getPessoasEmCasa(),
            questionario.getCondicoesMoradia(),
            questionario.getCadastroNIS()
            );
    }
}
