import { HandPalm, Play } from "@phosphor-icons/react";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { CycleForm } from "./components/CycleForm/CycleForm";
import { Countdown } from "./components/Countdown/Countdown";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmout: zod
    .number()
    .min(5, "O cliclo deve ser de no mínimo 5 minutos")
    .max(60, "O cliclo deve ser de no máximo 60 minutos"),
});
type NewCycleData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, interruptCurrentCycle, createNewCycle } =
    useContext(CyclesContext);
  const newCycleForm = useForm<NewCycleData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmout: 0,
    },
  });
  const { handleSubmit, watch, reset } = newCycleForm;
  function handleCreateNewCycle(data: NewCycleData) {
    createNewCycle(data);
    reset();
  }
  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <CycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton type="submit" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Parar
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Iniciar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
