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

      this.todos = JSON.parse(tasks);
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

      let max_uid = Math.max.apply(Math, this.todos.map(function(o) { return o.uid; }));
      let desc = this.addTodoForm.description
      this.todos.push({
        description: desc,
        is_completed: this.addTodoForm.is_completed[0] || false,
        uid: max_uid+1,
      });
      console.log(JSON.stringify(this.addTodoForm));

      localStorage.setItem("tasks", JSON.stringify(this.todos));
          this.confirmationMessage = `Задача "${desc}" добавлена`;
          this.showConfirmation = true;
      this.resetForm();
    },

    onReset(event) {
      event.preventDefault();
      this.$refs.addTodoModal.hide();
      this.resetForm();
    },

    deleteTodo(todo) {
      this.todos = this.todos.filter((item) =>{
        return item!==todo;
      });
      localStorage.setItem("tasks", JSON.stringify(this.todos));
            this.confirmationMessage = 'Задача удалена из списка';
            this.showConfirmation = true;
    },

    updateTodo(todo) {
      this.addTodoModal = todo;
    },

    onUpdateSubmit(event) {
      event.preventDefault();
      this.$refs.addTodoModal.hide();
      localStorage.setItem("tasks", JSON.stringify(this.todos));
      this.confirmationMessage = 'Задача обновлена';
      this.showConfirmation = true;
      this.getTodos();

//      const requestData = {
//        description: this.updateTodoForm.description,
//        is_completed: this.updateTodoForm.is_completed[0],
//      };
//      const todoURL = dataURL + this.updateTodoForm.uid;
//      axios.put(todoURL, requestData)
//        .then(() => {
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