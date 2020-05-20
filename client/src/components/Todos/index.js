import Confirmation from '../Confirmation/template.vue';

export default {
  name: 'Todo',
  data() {
    return {
      todos: [],
      addTodoForm: {
        uid: 0,
        description: '',
        is_completed: [],
      },
      formSetting: {
        title: "Добавить задачу",
        btnSubmit: "Добавить",
      },
      countTasks:{
        completed:0,
        un_completed:0,
      },
      confirmationMessage: '',
      dismissCountDown:0,
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
      this.calcCounts();
    },

    calcCounts(){
      this.countTasks.completed = this.todos.filter((item) => {return item.is_completed}).length;
      this.countTasks.un_completed = this.todos.filter((item) => {return !item.is_completed}).length;
    },

    resetForm() {
      this.addTodoForm.description = '';
      this.addTodoForm.is_completed = [];
    },

    onSubmit(event) {
      event.preventDefault();
      this.$refs.addTodoModal.hide();

      if (this.formSetting.title == "Добавить задачу") {

        let max_uid = Math.max.apply(Math,this.todos.map(function(o) { return o.uid; }));
        if(!isFinite(max_uid)) {
          max_uid = 0;
        }
        let desc = this.addTodoForm.description

        this.todos.push({
          description: desc,
          is_completed: this.addTodoForm.is_completed[0] || false,
          uid: max_uid+1,
        });

        localStorage.setItem("tasks", JSON.stringify(this.todos));
        this.addConfirmation(`Задача "${desc}" добавлена`);
        this.calcCounts();
      } else {
        this.todos.forEach(item => {
          if(item.is_completed.length == 0) {
           item.is_completed = false;
          }
        });
        localStorage.setItem("tasks", JSON.stringify(this.todos));
        this.addConfirmation('Задача обновлена');
        this.getTodos();
      }

      this.resetForm();
    },

    addConfirmation(mess) {
      this.confirmationMessage = mess;
      this.dismissCountDown = 3;
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
      this.addConfirmation('Задача удалена из списка');
      this.calcCounts();
    },

    setAddForm() {
      this.formSetting = {
        title: "Добавить задачу",
        btnSubmit: "Добавить",
      };
    },

    updateTodo(todo) {
      this.addTodoForm = todo;

      console.log(JSON.stringify(this.addTodoForm));
      console.log(JSON.stringify(todo))

      this.formSetting = {
        title: "Обновить задачу",
        btnSubmit: "Обновить",
      };
    },
  },
  components: {
    confirmation: Confirmation,
  },
  created() {
    this.getTodos();
  },
};