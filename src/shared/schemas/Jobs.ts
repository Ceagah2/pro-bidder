import * as yup from "yup";

export const jobSchema = yup.object().shape({
  title: yup.string().required("O título do orçamento é obrigatório"),
  description: yup.string().required("A descrição do orçamento é obrigatória"),
  sponsor: yup.string(),
  eta: yup
    .number()
    .positive("O tempo estimado deve ser positivo")
    .required("O tempo estimado é obrigatório"),
  dueDate: yup.date().required("A data de entrega do orçamento é obrigatória"),
  tasks: yup
    .array()
    .of(
      yup.object().shape({
        title: yup.string().required("O título da tarefa é obrigatório"),
        description: yup
          .string()
          .required("A descrição da tarefa é obrigatória"),
        isDone: yup.boolean(),
        eta: yup
          .number()
          .positive("O tempo estimado da tarefa deve ser positivo")
          .required("O tempo estimado da tarefa é obrigatório"),
      })
    )
    .min(1, "É necessário adicionar pelo menos uma tarefa"),
});
