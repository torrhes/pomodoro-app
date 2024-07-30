import {
  FormContainer,
  MinutesAmoutInput,
  TaskInput,
} from "./CycleForm.styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function CycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou atuar em:</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Descreva sua atividade"
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>
      <label htmlFor="minutesAmout">durante</label>
      <MinutesAmoutInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmout", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
