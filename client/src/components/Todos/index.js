import Confirmation from '../Confirmation/template.vue';

export default {
  name: 'Todo',
  data() {
    return {
      todos: [],
      addTodoForm: {
        description: '',
        is_completed: [],
      },
      updateTodoForm: {
        uid: 0,
        description: '',
        is_completed: [],
      },
      confirmationMessage: '',
      showConfirmation: false,
    };
  },
  methods: {
    getTodos() {
      let tasks = localStorage.getItem("tasks");

      if (tasks === null) {
        tasks = `[
              {
                "description": "прочитать книгу",
                "is_completed": false,
                "uid": 1
              },
              {
                "description": "учиться жонглировать 30 минут",
                "is_completed": false,
                "uid": 2
              },
              {
                "description": "помыть посуду",
                "is_completed": false,
                "uid": 3
              },
              {
                "description": "поесть",
                "is_completed": false,
                "uid": 4
              }
            ]`;
        localStorage.setItem("tasks", tasks);
      }

      this.todos = JSON.parse(localStorage.getItem("tasks"));
    },
    resetForm() {
      this.addTodoForm.description = '';
      this.addTodoForm.is_completed = [];
      this.updateTodoForm.description = '';
      this.updateTodoForm.is_completed = [];
    },
    onSubmit(event) {
      event.preventDefault();
      this.$refs.addTodoModal.hide();

      this.todos.push({
        description: this.addTodoForm.description,
        is_completed: this.addTodoForm.is_completed[0],
        uid: 5,
      });
      console.log(this.todos);

//      axios.post(dataURL, requestData)
//        .then(() => {
//          this.getTodos();
//          this.confirmationMessage = `Задача "${requestData.description}" добавлена`;
//          this.showConfirmation = true;
//        });
      this.resetForm();
    },
    onReset(event) {
      event.preventDefault();
      this.$refs.addTodoModal.hide();
      this.resetForm();
    },
    updateTodo(todo) {
      this.updateTodoForm = todo;
    },
    deleteTodo(todo) {
//        const todoURL = dataURL + todo.uid;
//        axios.delete(todoURL)
//        .then(() => {
//            this.getTodos();
//            this.confirmationMessage = 'Задача удалена из списка';
//            this.showConfirmation = true;
//        });
          console.log(todo);
    },
    onUpdateSubmit(event) {
      event.preventDefault();
      this.$refs.updateTodoModal.hide();
//      const requestData = {
//        description: this.updateTodoForm.description,
//        is_completed: this.updateTodoForm.is_completed[0],
//      };
//      const todoURL = dataURL + this.updateTodoForm.uid;
//      axios.put(todoURL, requestData)
//        .then(() => {
//          this.getTodos();
//          this.confirmationMessage = 'Задача обновлена';
//          this.showConfirmation = true;
//        });
    },
    onUpdateReset(event) {
      event.preventDefault();
      this.$refs.updateTodoModal.hide();
      this.resetForm();
    },
  },
  components: {
    confirmation: Confirmation,
  },
  created() {
    this.getTodos();
  },
};