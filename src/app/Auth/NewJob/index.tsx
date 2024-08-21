import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import CustomModal from "@/components/Modal";
import { jobSchema } from "@/shared/schemas/Jobs";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { S } from "./styles";

export default function NewJob() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(jobSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  const onSubmit = (data) => {
    const payload = {
      id: uuidv4(),
      ...data,
      tasks: data.tasks.map((task) => ({
        id: uuidv4(),
        ...task,
      })),
    };
    console.log(payload);
  };

  const addTask = (task) => {
    append(task);
    setIsModalVisible(false);
  };

  return (
    <Container headerTitle="Novo Orçamento" shouldBack>
      <View style={S.header}>
        <Text style={S.headerText}>
          Complete o formulário abaixo para criar seu orçamento
        </Text>
      </View>
      <View style={S.content}>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              label="Título"
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
        />
        {errors.title && (
          <Text style={S.errorMessage}>{errors.title.message}</Text>
        )}

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              label="Descrição"
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              numberOfLines={5}
              multiline
            />
          )}
        />
        {errors.description && (
          <Text style={S.errorMessage}>{errors.description.message}</Text>
        )}

        <Text style={S.label}>Tarefas</Text>
        <ScrollView style={S.tasksContainer}>
          {fields.length === 0 ? (
            <Text style={S.noTasksText}>
              Você ainda não adicionou nenhuma tarefa.
            </Text>
          ) : (
            fields.map((task, index) => (
              <View key={task.id} style={S.taskItem}>
                <Text style={S.taskTitle}>{task.title}</Text>
                <Text style={S.taskDescription}>{task.description}</Text>
                <Text style={S.taskEta}>ETA: {task.eta} horas</Text>
                <TouchableOpacity onPress={() => remove(index)}>
                  <Text style={S.removeTask}>Remover</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>
        <TouchableOpacity
          style={S.addButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={S.addButtonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        height={500}
      >
        <TaskForm onSubmit={addTask} />
      </CustomModal>
    </Container>
  );
}

function TaskForm({ onSubmit }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      eta: "",
    },
  });

  const onSubmitTask = (data) => {
    onSubmit({
      ...data,
      isDone: false,
      id: uuidv4(),
    });
  };

  return (
    <View style={S.modalContent}>
      <Text style={S.modalTitle}>Adicionar Nova Tarefa</Text>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            label="Título"
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            label="Descrição"
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="eta"
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            label="ETA (em horas)"
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      <TouchableOpacity
        style={S.saveTaskButton}
        onPress={handleSubmit(onSubmitTask)} 
      >
        <Text style={S.saveTaskButtonText}>Salvar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}
