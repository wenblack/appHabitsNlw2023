<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Alert, ScrollView, Text, View } from "react-native";
import dayjs from "dayjs";
import clsx from "clsx";

import { api } from "../lib/axios";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";
=======
import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import dayjs from "dayjs";
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c

import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/Progress.Bar";
import { Checkbox } from "../components/Checkbox";
<<<<<<< HEAD
import { Loading } from "../components/Loading";
import { HabitsEmpty } from "../components/HabitsEmpty";
=======
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c

interface Params {
  date: string;
}

<<<<<<< HEAD
interface DayInfoProps {
  completedHabits: string[];
  possibleHabits: {
    id: string;
    title: string;
  }[];
}

export function Habit() {
  const [loading, setLoading] = useState(true);
  const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null);
  const [completedHabits, setCompletedHabits] = useState<string[]>([])

=======
export function Habit() {
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c
  const route = useRoute()
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
<<<<<<< HEAD
  const isDateInPast = parsedDate.endOf('day').isBefore(new Date());
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  const habitsProgress = dayInfo?.possibleHabits?.length ? generateProgressPercentage(dayInfo.possibleHabits.length, completedHabits.length) : 0

  async function fetchHabits() {
    try {
      setLoading(true)

      const response = await api.get('/day', { params: { date } });
      setDayInfo(response.data);
      setCompletedHabits(response.data.completedHabits ?? [])
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'N??o foi poss??vel carregar as informa????es dos h??bitos.')
    } finally {
      setLoading(false)
    }
  }

  async function handleToggleHabits(habitId: string) {
    try {
      await api.patch(`/habits/${habitId}/toggle`);

      if (completedHabits?.includes(habitId)) {
        setCompletedHabits(prevState => prevState.filter(habit => habit !== habitId));
      } else {
        setCompletedHabits(prevState => [...prevState, habitId]);
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'N??o foi poss??vel atualizar o status do h??bito.')
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

=======
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

<<<<<<< HEAD
        <ProgressBar progress={habitsProgress} />

        <View className={clsx("mt-6", {
            ['opacity-50']: isDateInPast
          })}>
          {
            dayInfo?.possibleHabits ?
            dayInfo.possibleHabits?.map(habit => (
              <Checkbox 
                key={habit.id}
                title={habit.title}
                checked={completedHabits?.includes(habit.id)}
                onPress={() => handleToggleHabits(habit.id)}
                disabled={isDateInPast}
              />
            ))
            : 
            <HabitsEmpty />
          }
        </View>

        {
          isDateInPast && (
            <Text className="text-white mt-10 text-center">
              Voc?? n??o pode editar h??bitos de uma data passada.
            </Text>
          )
        }
=======
        <ProgressBar progress={30} />

        <View className="mt-6">
          <Checkbox 
            title="Beber 2L de ??gua"
            checked={false}
          />

          <Checkbox 
            title="Caminhar"
            checked
          />
        </View>
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c
      </ScrollView>
    </View>
  )
}