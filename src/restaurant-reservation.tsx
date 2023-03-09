import {
  ActionIcon,
  Center,
  Group,
  NumberInputHandlers,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { SegmentedControl } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { useRef, useState } from "react";
import * as dayjs from "dayjs";

const MIN_PERSONS = 1;
const MAX_PERSONS = 12;

const RestaurantReservation = () => {
  const [reservationDate, setReservationDate] = useState<null | Date>(null);
  const [persons, setPersons] = useState<number>(1);
  const handlers = useRef<NumberInputHandlers>();
  const [reservationTime, setReservationTime] = useState<null | Date>(null);

  return (
    <Center>
      <Stack>
        <h1>Hi! Book yourself a table!</h1>

        <form>
          <Stack>
            <label>
              <Text fz="lg">Pick a date for your reservation</Text>
            </label>

            <DatePicker
              label="hello world"
              value={reservationDate}
              onChange={(value) => setReservationDate(value)}
            />

            <label>
              <Text fz="lg">
                For how many people do you want to book the table?
              </Text>
            </label>

            <Group spacing={5}>
              <ActionIcon
                size={36}
                variant="default"
                onClick={() => handlers.current.decrement()}
              >
                –
              </ActionIcon>

              <NumberInput
                hideControls
                value={persons}
                onChange={(value) => setPersons(value)}
                handlersRef={handlers}
                max={MAX_PERSONS}
                min={MIN_PERSONS}
                styles={{ input: { width: rem(54), textAlign: "center" } }}
              />

              <ActionIcon
                size={36}
                variant="default"
                onClick={() => handlers.current.increment()}
              >
                +
              </ActionIcon>
            </Group>

            <label>
              <Text fz="lg">What time?</Text>
            </label>

            <SegmentedControl
              value={reservationTime}
              onChange={setReservationTime}
              data={[
                {
                  label: "18:00",
                  value: "1970-00-00 18:00",
                },
                {
                  label: "18:30",
                  value: "1970-00-00 18:30",
                },
                {
                  label: "19:00",
                  value: "1970-00-00 19:00",
                },
                {
                  label: "19:30",
                  value: "1970-00-00 19:30",
                },
                {
                  label: "20:00",
                  value: "1970-00-00 20:00",
                },
                {
                  label: "20:30",
                  value: "1970-00-00 20:30",
                },
              ]}
            />
          </Stack>
        </form>
      </Stack>
    </Center>
  );
};

export default RestaurantReservation;
