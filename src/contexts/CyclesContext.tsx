import { createContext, useEffect, useReducer, useState } from 'react';
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer';
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction
} from '../reducers/cycles/actions';
import { differenceInSeconds } from 'date-fns';
interface CreateCycleData {
  task: string;
  minutesAmout: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  interruptCurrentCycle: () => void;
  createNewCycle: (data: CreateCycleData) => void;
}
interface CyclesContextProviderProps {
  children?: React.ReactNode;
}
export const CyclesContext = createContext({} as CyclesContextType);
export function CyclesContextProvider({
  children
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null
    },
    () => {
      const stateJson = localStorage.getItem('@pomodoro:cycles-state-1.0.0');
      if (stateJson) {
        return JSON.parse(stateJson);
      }
      return { cycles: [], activeCycleId: null };
    }
  );
  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  const [amountSecondsPassed, setAmoutSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });
  useEffect(() => {
    const stateJson = JSON.stringify(cyclesState);
    localStorage.setItem('@pomodoro:cycles-state-1.0.0', stateJson);
  }, [cyclesState]);

  function setSecondsPassed(seconds: number) {
    setAmoutSecondsPassed(seconds);
  }
  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmout,
      startDate: new Date()
    };
    dispatch(addNewCycleAction(newCycle));
    setAmoutSecondsPassed(0);
  }
  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction);
  }
  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction);
  }
  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        cycles,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        interruptCurrentCycle,
        createNewCycle
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
