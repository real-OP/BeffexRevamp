import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  TextInput,
  Card,
  Text,
  RadioButton,
  Button,
  Divider,
  IconButton,
} from "react-native-paper";
import CustomStatusBar from "@/components/statusbar";

export default function AddtaskScreen() {
  const { theme, colorScheme, setColorScheme } = useContext(ThemeContext);
  const styles = createStyles(theme, colorScheme);
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueTime, setDueTime] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: theme.paperColor }}>
      <CustomStatusBar />

      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Title
            title="Task Title"
            titleVariant="titleLarge"
            titleStyle={{
              fontWeight: "600",
              color: theme.textColor,
            }}
          />
          <Card.Content>
            <TextInput
              mode="outlined"
              placeholder="What do you need to do?"
              value={taskTitle}
              onChangeText={setTaskTitle}
              style={styles.input}
            />
          </Card.Content>
        </Card>

        {/* Priority Level */}
        <Card style={styles.card}>
          <Card.Title
            title="Priority Level"
            titleVariant="titleLarge"
            titleStyle={{
              fontWeight: "600",
              color: theme.textColor,
            }}
          />
          <Card.Content>
            <RadioButton.Group onValueChange={setPriority} value={priority}>
              <View style={styles.radioRow}>
                <RadioButton value="high" color="red" />
                <View>
                  <Text style={[styles.priorityTitle, { color: "red" }]}>
                    High Priority
                  </Text>
                  <Text style={styles.priorityDesc}>Urgent and important</Text>
                </View>
              </View>
              <Divider />
              <View style={styles.radioRow}>
                <RadioButton value="medium" color="orange" />
                <View>
                  <Text style={[styles.priorityTitle, { color: "orange" }]}>
                    Medium Priority
                  </Text>
                  <Text style={styles.priorityDesc}>
                    Important but not urgent
                  </Text>
                </View>
              </View>
              <Divider />
              <View style={styles.radioRow}>
                <RadioButton value="low" color="green" />
                <View>
                  <Text style={[styles.priorityTitle, { color: "green" }]}>
                    Low Priority
                  </Text>
                  <Text style={styles.priorityDesc}>Good To Complete</Text>
                </View>
              </View>
            </RadioButton.Group>
          </Card.Content>
        </Card>

        {/* Due Time */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.label}>Due Time (Optional)</Text>
            <View style={styles.timeRow}>
              <TextInput
                mode="outlined"
                placeholder="--:--"
                value={dueTime}
                onChangeText={setDueTime}
                style={[styles.input, { flex: 1 }]}
              />
              <IconButton icon="clock-outline" size={24} onPress={() => {}} />
            </View>
          </Card.Content>
        </Card>

        {/* Save Task Button */}
        <Button
          mode="contained"
          style={styles.saveButton}
          onPress={() => console.log({ taskTitle, priority, dueTime })}
        >
          Save Task
        </Button>
      </ScrollView>
    </View>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: theme.paperColor, 
    },
    card: {
      marginTop: "10%",
      width: "90%",
      maxWidth: 400,
      padding: 16,
      borderRadius: 10,
      elevation: 3,
      alignSelf: "center",
      backgroundColor: theme.backgroundColor,
      borderWidth: 2,
      borderColor: theme.dividerColor,
    },
    label: {
      color: theme.textColor,
      fontWeight: "600",
      marginBottom: 8,
      fontSize: 16,
    },
    input: {
      backgroundColor: "white",
    },
    radioRow: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 8,
    },
    priorityTitle: {
      fontWeight: "600",
      fontSize: 15,
    },
    priorityDesc: {
      color: theme.textColor,
      fontSize: 12,
    },
    timeRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    saveButton: {
      marginTop: 20,
      borderRadius: 10,
      paddingVertical: 6,
    },
  });
}
